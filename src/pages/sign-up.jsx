import { useAppContext } from "@/components/AppContext"
import Page from "@/components/Page"
import api from "@/services/api"
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid"
import { AxiosError } from "axios"
import classNames from "classnames"
import { Formik, Field, Form, ErrorMessage } from "formik"
import { useRouter } from "next/router"
import qs from "qs"
import { useCallback, useState } from "react"
import * as Yup from "yup"

const validationSchema = Yup.object().shape({
  emailOrUsername: Yup.string().required("L'email est obligatoire !"),
  password: Yup.string()
    .required("Le mot de passe est obligatoire !")
    .min(8, "le mot de passe doit contenir au minimum 8 caractères")
    .max(50, "le Mot de passe ne peut pas contenir plus de 50 caractères"),
})

const initialValues = {
  emailOrUsername: "",
  password: "",
}

const signUp = () => {
  const router = useRouter()
  const { setSession } = useAppContext()
  const [errors, setErrors] = useState([])
  const [visible, setVisiblity] = useState(false)
  const handleVisionOff = () => {
    setVisiblity(true)
  }
  const handleVesionOn = () => {
    setVisiblity(false)
  }

  const handleSubmit = useCallback(
    async ({ emailOrUsername, password }) => {
      setErrors([])

      try {
        const {
          data: {
            result: [{ jwt }],
          },
        } = await api.post("/sign-in", { emailOrUsername, password })
        if (jwt) {
          setSession(jwt)
          router.push(qs.parse(location.search.slice(1))?.returnTo || "/")

          return
        }
      } catch (err) {
        if (err instanceof AxiosError && err.response?.data?.error) {
          setErrors(err.response.data.error)

          return
        }
        setErrors(["Oops. Something went wrong, please try again."])
      }
    },
    [router, setSession]
  )

  return (
    <Page>
      <div className="h-screen p-1 m-1 flex flex-col items-center rounded-md border-2 border-black bg-cover bg-no-repeat bg-center bg-[url('/background/ffxvi1.jpeg')]">
        <ul className={classNames("", errors[0] ? "" : "hidden")}>
          {errors.map((error, i) => (
            <li key={i}>🛑 {error}</li>
          ))}
        </ul>
        <h1 className="text-white text-center text-4xl font-bold mb-5 underline">
          Connexion
        </h1>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, isValid }) => (
            <Form>
              <div className="flex flex-col">
                <label className="text-white">Email :</label>
                <Field
                  type="input"
                  id="email"
                  name="emailOrUsername"
                  className="border-2 border-black px-2 rounded"
                />
                <ErrorMessage
                  name="emailOrUsername"
                  component="small"
                  className="text-red-600"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-white">Mot de passe :</label>
                <div className="flex items-center justify-between">
                  <Field
                    type={visible ? "text" : "password"}
                    id="password"
                    name="password"
                    className="border-2 border-black px-2 rounded"
                  />
                  {visible ? (
                    <span onClick={handleVesionOn}>
                      <EyeIcon className="w-6 h-6 bg-white hover:cursor-pointer" />
                    </span>
                  ) : (
                    <span onClick={handleVisionOff}>
                      <EyeSlashIcon className="w-6 h-6 bg-white hover:cursor-pointer" />
                    </span>
                  )}
                </div>
                <ErrorMessage
                  name="password"
                  component="small"
                  className="text-red-600"
                />
              </div>
              <button type="submit" disabled={!isValid || isSubmitting}>
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </Page>
  )
}
export default signUp

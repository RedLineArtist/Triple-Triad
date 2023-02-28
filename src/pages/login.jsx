import { Formik, Field, Form, ErrorMessage } from "formik"
import * as Yup from "yup"
import Page from "../components/Page"
import { useRouter } from "next/router"

const validationSchema = Yup.object().shape({
  nickName: Yup.string()
    .min(2, "Trop petit !")
    .max(12, "Trop long !")
    .required("champ obligatoire"),
  email: Yup.string()
    .email("Email invalide !")
    .required("L'email est obligatoire !"),
  password: Yup.string()
    .required("Le mot de passe est obligatoire !")
    .min(8, "le mot de passe doit contenir au minimum 8 caractères")
    .max(50, "le Mot de passe ne peut pas contenir plus de 50 caractères"),
  acceptTerms: Yup.bool().oneOf(
    [true],
    "les conditions d'inscription sont obligatoires"
  ),
})

const initialValues = {
  nickName: "",
  email: "",
  password: "",
  acceptTerms: false,
}

const login = () => {
  const router = useRouter()
  const handleCGU = () => {
    router.push("/termsOfUse")
  }
  const handleSubmit = (values) => {
    console.log(123)
  }
  const handleConnexion = () => {
    router.push("/sign-up")
  }

  return (
    <Page>
      <div className="h-screen p-1 m-1 flex flex-col items-center rounded-md border-2 border-black bg-cover bg-no-repeat bg-center bg-[url('/background/ffxvi3.jpg')]">
        <div>
          <h1 className="text-white text-center text-4xl font-bold mb-5 underline">
            Inscription
          </h1>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ resetForm }) => (
              <Form>
                <div className="flex flex-col">
                  <label className="text-white"> Pseudo :</label>
                  <Field
                    type="text"
                    id="nickName"
                    name="nickName"
                    className="border-2 border-black px-2 rounded"
                  />
                  <ErrorMessage
                    name="nickName"
                    component="small"
                    className="text-red-600"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-white">Email :</label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    className="border-2 border-black px-2 rounded"
                  />
                  <ErrorMessage
                    name="email"
                    component="small"
                    className="text-red-600"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-white">Mot de passe :</label>
                  <Field
                    type="password"
                    id="password"
                    name="password"
                    className="border-2 border-black px-2 rounded"
                  />
                  <ErrorMessage
                    name="password"
                    component="small"
                    className="text-red-600"
                  />
                </div>
                <div className="flex flex-col">
                  <div>
                    <Field
                      name="acceptTerms"
                      type="checkbox"
                      className="form-check-input"
                    />
                    <label className="form-check-label text-white">
                      J'ai lu et j'accepte 
                      <button
                        className="underline decoration-solid"
                        onClick={handleCGU}
                      >
                        les Conditions
                      </button>
                    </label>
                  </div>
                  <ErrorMessage
                    name="acceptTerms"
                    component="small"
                    className="text-red-600"
                  />
                </div>

                <div className="flex justify-between mt-2">
                  <button
                    onClick={handleSubmit}
                    className="p-1 text-white font-bold border-black border-2"
                  >
                    S'inscrire
                  </button>
                  <button
                    onClick={handleConnexion}
                    className="p-1 text-white font-bold border-black border-2"
                  >
                    Connexion
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </Page>
  )
}

export default login

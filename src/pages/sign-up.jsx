import Page from "@/components/Page"
import { Formik, Field, Form, ErrorMessage } from "formik"
import * as Yup from "yup"

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Email invalide !")
    .required("L'email est obligatoire !"),
  password: Yup.string()
    .required("Le mot de passe est obligatoire !")
    .min(8, "le mot de passe doit contenir au minimum 8 caractères")
    .max(50, "le Mot de passe ne peut pas contenir plus de 50 caractères"),
})

const initialValues = {
  email: "",
  password: "",
}

const signUp = () => {
  return (
    <Page>
      <div className="h-screen p-1 m-1 flex flex-col items-center rounded-md border-2 border-black bg-cover bg-no-repeat bg-center bg-[url('/background/ffxvi1.jpeg')]">
        <h1 className="text-white text-center text-4xl font-bold mb-5 underline">
          Connexion
        </h1>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          // onSubmit={handleSubmit}
        >
          {({ resetForm }) => (
            <Form>
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
            </Form>
          )}
        </Formik>
      </div>
    </Page>
  )
}
export default signUp

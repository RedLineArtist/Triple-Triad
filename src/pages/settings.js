import ImageComponent from "@/components/ImageComponent"
import Page from "@/components/Page"
import { ArrowLeftIcon } from "@heroicons/react/24/solid"
import { ErrorMessage, Field, Form, Formik } from "formik"
import * as Yup from "yup"

const validationSchema = Yup.object().shape({
  nickName: Yup.string()
    .min(2, "Trop petit !")
    .max(12, "Trop long !")
    .required("champ obligatoire"),
  email: Yup.string()
    .email("Email invalide !")
    .required("L'email est obligatoire !"),
})

const initialValues = {
  nickName: "",
  email: "",
  password: "",
  acceptTerms: false,
}
const settings = () => {
  const handleSubmit = (values) => {
    console.log(123)
  }
  return (
    <Page>
      <h1 className="text-2xl font-bold text-center">Settings</h1>

      <button className="h-7 w-20 flex justify-between border-2 border-black rounded-lg hover:bg-gray-200">
        <ArrowLeftIcon className="w-6" />
        <p>Retour</p>
      </button>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ resetForm }) => (
          <Form>
            <div className="flex flex-col">
              <label className="text-black"> Pseudo :</label>
              <Field
                type="text"
                id="nickName"
                name="nickName"
                className="border-2 border-black bg-gray-300 px-2 rounded"
              />
              <ErrorMessage
                name="nickName"
                component="small"
                className="text-red-600"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-black">Email :</label>
              <Field
                type="email"
                id="email"
                name="email"
                className="border-2 border-black bg-gray-300 px-2 rounded"
              />
              <ErrorMessage
                name="email"
                component="small"
                className="text-red-600"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-black">Pseudo Discord :</label>
              <div className="flex gap-x-2">
                <ImageComponent src="/icons/discord.png" className="w-7" />
                <Field
                  type="text"
                  id="pseudo discord"
                  name="pseudo discord"
                  className="w-screen border-2 border-black bg-gray-300 px-2 rounded"
                  placeholder="Entrer votre pseudo Discord"
                />
              </div>
              <ErrorMessage
                name="pseudo discord"
                component="small"
                className="text-red-600"
              />
            </div>
            <div className="flex flex-col">
              <label className="form-check-label text-black">
                Pseudo FFXIV :
              </label>
              <div className="flex gap-x-2">
                <ImageComponent src="/icons/FFXIVLOGO.png" className="w-7" />
                <Field
                  type="text"
                  id="pseudo ffxiv"
                  name="pseudo ffxiv"
                  className="w-screen border-2 border-black bg-gray-300 px-2 rounded"
                  placeholder="Entrer votre pseudo FFXIV"
                />
              </div>
              <ErrorMessage
                name="pseudo ffxiv"
                component="small"
                className="text-red-600"
              />
            </div>
          </Form>
        )}
      </Formik>
      <div className="m-3 flex justify-center">
        <button className="h-7 w-20 border-2 border-black rounded-lg bg-orange-400 hover:bg-orange-400">
          <p>Valider</p>
        </button>
      </div>
    </Page>
  )
}
export default settings

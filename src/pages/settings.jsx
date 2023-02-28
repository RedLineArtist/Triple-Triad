import ImageComponent from "@/components/ImageComponent"
import Page from "@/components/Page"
import { ArrowLeftIcon } from "@heroicons/react/24/solid"
import { ErrorMessage, Field, Form, Formik } from "formik"
import * as Yup from "yup"
import { useCallback } from "react"
import api from "@/services/api"
import FormField from "@/components/FormField"
import Button from "@/components/Button"

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
  avatar: "",
  avatarFile: "",
  nickName: "",
  email: "",
  password: "",
  acceptTerms: false,
}
const settings = () => {
  const handleSubmit = useCallback(async ({ avatarFile }) => {
    const result = await api.post(
      "/users/avatar",
      { avatar: avatarFile },
      { headers: { "Content-Type": "multipart/form-data" } }
    )

    console.log(result)
  }, [])

  return (
    <Page>
      <h1 className="text-2xl font-bold text-center">Settings</h1>
      <Button className="flex mb-3" type="submit">
        <ArrowLeftIcon className="w-7 font-bold" />
        RETOUR
      </Button>

      <div className="bg-blue-600">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ resetForm }) => (
            <Form className="flex gap-4" encType="multipart/form-data">
              <div className="w-64 flex flex-col bg-red-700">
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
              <div className="bg-green-600 w-64 space-y-2">
                <FormField name="avatar" type="file" />
                <div className="flex justify-center">
                  <Button type="submit">SAVE</Button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <Formik onSubmit={handleSubmit}>
        <Form>
          <div className="flex flex-col w-72">
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
          <div className="flex flex-col w-72">
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
      </Formik>
      <div className="m-3 flex justify-center">
        <Button type="submit">VALIDER</Button>
      </div>
    </Page>
  )
}
export default settings

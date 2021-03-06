
import { MetaTags } from '@redwoodjs/web'
import { 
  FieldError,
  Form,
  TextField,
  TextAreaField,
  Submit
} from '@redwoodjs/forms'

const ContactPage = () => {
  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <>
      <MetaTags title="Contact" description="Contact page" />

      <Form onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <TextField name="name" validation={{ required: true }} errorClassName="error" />
        <FieldError name="name" className="error"/>

        <label htmlFor="email">Email</label>
        <TextField name="email" validation={{ required: true }} errorClassName="error" />
        <FieldError name="email" className="error"/>

        <label htmlFor="message">Message</label>
        <TextAreaField name="message" validation={{ required: true }} errorClassName="error" />
        <FieldError name="message" className="error" />

        <Submit>Save</Submit>
      </Form>
    </>
  )
}

export default ContactPage

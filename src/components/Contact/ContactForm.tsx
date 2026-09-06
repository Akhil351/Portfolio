import { useForm, ValidationError } from "@formspree/react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { personalInfo } from "../../data/portfolio";

export default function ContactForm() {
  const [state, handleSubmit] = useForm(personalInfo.formId);
  if (state.succeeded)
    return (
      <div className="form-success" role="status">
        <CheckCircle2 size={28} />
        <h3>Thanks for reaching out.</h3>
        <p>
          Your message has been sent. I’ll get back to you as soon as I can.
        </p>
      </div>
    );
  return (
    <form
      onSubmit={handleSubmit}
      className="contact-form"
      aria-label={`Send ${personalInfo.displayName} a message`}
    >
      <div className="form-intro">
        <h3>A good conversation starts here.</h3>
        <p>Tell me a little about your project or opportunity.</p>
      </div>
      <div className="form-fields">
        <div className="form-row">
          {[
            {
              id: "name",
              label: "Your name",
              type: "text",
              autoComplete: "name",
            },
            {
              id: "email",
              label: "Email address",
              type: "email",
              autoComplete: "email",
            },
          ].map((field) => (
            <div key={field.id}>
              <label htmlFor={field.id}>{field.label}</label>
              <input
                id={field.id}
                name={field.id}
                type={field.type}
                autoComplete={field.autoComplete}
                required
                maxLength={200}
                aria-describedby={`${field.id}-error`}
              />
              <div id={`${field.id}-error`} className="field-error">
                <ValidationError
                  prefix={field.label}
                  field={field.id}
                  errors={state.errors}
                />
              </div>
            </div>
          ))}
        </div>
        <label htmlFor="subject">Subject</label>
        <input id="subject" name="subject" required maxLength={200} />
        <label htmlFor="message">Your message</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          maxLength={10000}
          aria-describedby="message-error"
        />
        <div id="message-error" className="field-error">
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        <div className="field-error" role="alert">
          <ValidationError errors={state.errors} />
        </div>
        <div className="form-submit">
          <p>Delivered securely via Formspree.</p>
          <button
            className="button button-primary"
            type="submit"
            disabled={state.submitting}
          >
            {state.submitting ? "Sending…" : "Send message"}
            <ArrowUpRight size={16} />
          </button>
        </div>
      </div>
    </form>
  );
}

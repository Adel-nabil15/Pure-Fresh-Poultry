// style os the message
const StyleMessage = (name, phone, contant, email) => {
  return ` 
  <h2>Contact Information</h2>
  <div>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Message:</strong> ${contant}</p>
    <p><strong>Email:</strong> ${email}</p>
  </div>
</div>`;
};
export default StyleMessage;

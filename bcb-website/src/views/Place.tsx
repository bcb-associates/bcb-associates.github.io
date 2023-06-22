const Place = () => {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d228.2652353954827!2d90.40823103295564!3d23.738685177491327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1687414614302!5m2!1sen!2sbd"
        width="600"
        height="450"
        style={{ border: "0" }}
        allowFullScreen
        loading="lazy"
        content="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Place;

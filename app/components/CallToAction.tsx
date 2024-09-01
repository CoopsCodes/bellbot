const CallToAction: React.FC = () => {
  return (
    <a
      href="https://bellroy.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="block mt-4 md:absolute md:top-0 md:right-0 md:mt-4 md:mr-4"
    >
      <div className="flex md:flex-col-reverse flex-col md:items-end">
        <p className="text-center md:text-right font-light md:mb-2">
          {"View our collection >"}
        </p>
        <img
          className="w-full md:w-60 md:h-40 object-cover"
          alt="Branding image"
          loading="lazy"
          src="https://bellroy-cms-images.imgix.net/2024-Bogong-homepage-subbanner-1.jpg?auto=format&amp;fit=max&amp;w=400"
          srcSet="https://bellroy-cms-images.imgix.net/2024-Bogong-homepage-subbanner-1.jpg?auto=format&amp;fit=max&amp;w=400 400w, https://bellroy-cms-images.imgix.net/2024-Bogong-homepage-subbanner-1.jpg?auto=format&amp;fit=max&amp;w=800 800w, https://bellroy-cms-images.imgix.net/2024-Bogong-homepage-subbanner-1.jpg?auto=format&amp;fit=max&amp;w=1000 1000w, https://bellroy-cms-images.imgix.net/2024-Bogong-homepage-subbanner-1.jpg?auto=format&amp;fit=max&amp;w=1300 1300w"
        />
      </div>
    </a>
  );
};

export default CallToAction;

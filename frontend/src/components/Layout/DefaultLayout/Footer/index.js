import Icons from "../../../Icons";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col space-y-2 py-4  justify-center w-11/12 mx-auto border-t border-dfe3e6">
        <div className="flex justify-center space-x-5">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icons.FaceBook />
          </a>
          <a
            href="https://messenger.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icons.Messenger />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icons.Instagram />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icons.Youtube />
          </a>
        </div>
        <p className="text-center text-gray-700 font-medium">
          Copyright &copy; 2024 Company Ltd.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

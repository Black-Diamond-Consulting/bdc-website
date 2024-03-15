import PropTypes from 'prop-types';

export const SupportImages = ({ source, text }) => {
    return (
        <div className="text-center px-10 py-10">
            <img src={source} alt={text} className="rounded-sm mx-auto" />
            <p className="text-white mt-2">{text}</p>
        </div>
    )
}

SupportImages.propTypes = {
    source: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ]).isRequired,
    text: PropTypes.string.isRequired
  };
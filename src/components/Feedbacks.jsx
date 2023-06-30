import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.9, 3)}
    // the index * 0.9 ,3 is types of speed
    className="bg-black-200 p-10 rounded-3xl
xs:w-[320px] w-full"
  >
    {/*remember the 0.75 is for duration and the empty "" is for direction */}
    <p
      className="text-white 
    font-black text-[48px]"
    >
      "
    </p>
    <div className="mt-1">
      <p
        className="text-white tracking-wider
       text-[18px]"
      >
        {testimonial}
      </p>
    </div>
    <div
      className="mt-7 flex justify-between
 items-center gap-1"
    >
      <div className="flex-1 flex flex-col">
        <p className="text-white font-medium text-[15px]">
          <span style={styles.blueTextGradient}>@</span>
          {name}
        </p>
        <p className="mt-1 text-secondary text-[12px]">
          {designation} of {company}
        </p>
      </div>
      <img 
        src={image}
        alt={`feedback-by-${name}`}
        className="w-12 h-12 rounded-full
        object-cover"
      />
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className="mt-12 bg-teridiery-300 rounded-[20px]">
      <div
        className={`${styles.padding} bg-teridiery-300
    rounded-2xl min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <p className={styles.sectionHeadText}>Testimonials</p>
        </motion.div>
      </div>
      <div
        className={`${styles.paddingX} -mt-20
        pb-14 flex flex-wrap gap-7`}
      >
        {testimonials.map((testimonial, index) => (
          <FeedbackCard
            key={testimonial.name}
            index={index}
            {...testimonial}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks,"");

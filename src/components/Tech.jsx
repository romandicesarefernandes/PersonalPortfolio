import { motion } from 'framer-motion';
import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { languages, technologies } from '../constants';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';

const Tech = () => {
  return (
    <>
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubTextLight}>C/Java/Phyton/Javascript/Css/HTML</p>
        <h2 className={styles.sectionHeadTextLight}>Programming languages.</h2>
      </motion.div>


      <div className="flex flex-wrap justify-center gap-10 mt-14">
        {languages.map((languages) => (
          <div className="w-28 h-28" key={languages.name}>
            <BallCanvas icon={languages.icon} />
          </div>
        ))}
      </div>
      </>
      <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubTextLight}><br></br> <br></br> ReactJs/React Native/Bootstrap <br></br> /expressjs/git/figma/android/jests <br></br> /mongodb/heroku/linux/expressjs</p>
        <h2 className={styles.sectionHeadTextLight}>Tools and frameworks.</h2>
      </motion.div>
      <div className="flex flex-wrap justify-center gap-10 mt-14">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
      </>
    </>
  );
};

export default SectionWrapper(Tech, '');

import styles from "./foodtypes.module.css";
import cardHelper from "./CardDataHelper";
import SmallCard from "./components/SmallCard";
import FoodTypesTitle from "./FoodtypesTitle";

/**************************************************************/
/**********  FOODTYPES SELECTOR SECTION COMPONENT *************/
/**************************************************************/

const FoodTypes = () => {
  {
    /*SHUFFLE DATA*/
  }
  const shuffledData = cardHelper().sort(() => Math.random() - 0.5);

  return (
    <>
      <div className={styles.goldenline}></div>
      <FoodTypesTitle />
      <section className={styles.sectionFoodTypes}>
        <h1 className={styles.suggestedforyou}>Sugeridas para ti</h1>
        <div className={styles.foodTypesContainer}>
          <div className={styles.foodTypesGrid}>
            {/* PRINT CARDS INTO THE GRID CATEGORIES */}
            {shuffledData.slice(0, 6).map((foodType, index) => (
              <SmallCard
                key={index}
                image={foodType.src}
                title={foodType.title}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FoodTypes;

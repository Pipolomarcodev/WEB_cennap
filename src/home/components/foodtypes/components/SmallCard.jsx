import styles from "./smallcard.module.css"

/**************************************************************/ 
/*******************  SMALLCARD COMPONENT *********************/ 
/**************************************************************/ 

const SmallCard = ({id,image, title}) => {

    return (
      
            <div 
            key={id}
            className={styles.container}
            href="#" 
            tabIndex="0"
            >
                {/*FOOD TYPE IMAGE*/}
                <img 
                className={styles.foodTypeImage}
                src={image} 
                alt="food-type" 
                />
                <div 
                className={styles.titleContainer}
                >
                     {/*CARD TITLE*/}
                    <a 
                    className={styles.foodTitleMini}
                    >
                    {title}
                    </a>
                </div>
            </div>
        )
    }
    
export default SmallCard;
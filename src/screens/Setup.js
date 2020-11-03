import React from 'react'
import CourseSelectionOverlay from '../components/CourseSelectionOverlay'
import FilterSelection from '../components/FilterSelection'

const Setup = () =>{
    const institutes= ['אוניברסיטת אריאל', 'אוניברסיטת בן-גוריון בנגב', 'אוניברסיטת בר-אילן' , 'אוניברסיטת חיפה', 'אוניברסיטת תל אביב', 'אורות ישראל מכללה אקדמית לחינוך מיסודן של מכללת אורות ישראל ומכללת מורשת יעקב', 'אלקאסמי – מכללה אקדמית לחינוך', 'אמונה-אפרתה – מכללה אקדמית לאמנויות וחינוך', 'אפקה – המכללה האקדמית להנדסה בתל-אביב', 'בצלאל – אקדמיה לאמנות ועיצוב ירושלים', 'האוניברסיטה העברית בירושלים', 'האוניברסיטה הפתוחה', 'האקדמיה למוסיקה ולמחול בירושלים', 'האקדמית תל-אביב יפו', 'הטכניון – מכון טכנולוגי לישראל', 'המכללה האקדמית אחוה', 'המכללה האקדמית אשקלון', 'המכללה האקדמית בוינגייט', 'המכללה האקדמית בית-ברל', 'המכללה האקדמית גליל מערבי', 'המכללה האקדמית הדסה ירושלים', 'המכללה האקדמית הדתית לחינוך שאנן', 'המכללה האקדמית הערבית לחינוך בישראל – חיפה', 'המכללה האקדמית הרצוג מיסודן של מכללות ליפשיץ והרצוג', 'המכללה האקדמית כנרת בעמק הירדן', 'המכללה האקדמית להנדסה אורט בראודה', 'המכללה האקדמית להנדסה ע”ש סמי שמעון', 'המכללה האקדמית לחברה ואמנויות', 'המכללה האקדמית לחינוך גבעת וושינגטון', 'המכללה האקדמית לחינוך ולספורט אוהלו בקצרין', 'המכללה האקדמית לחינוך חמדת הדרום', 'המכללה האקדמית לחינוך ע”ש א. ד. גורדון', 'המכללה האקדמית לחינוך ע”ש דוד ילין', 'המכללה האקדמית לחינוך ע”ש קיי', 'המכללה האקדמית לישראל ברמת-גן', 'המכללה האקדמית נתניה', 'המכללה האקדמית ספיר', 'המכללה האקדמית עמק יזרעאל ע”ש מקס שטרן', 'המכללה האקדמית צפת', 'המכללה האקדמית תל חי', 'המסלול האקדמי המכללה למינהל', 'המרכז האקדמי לב', 'המרכז האקדמי למשפט ולעסקים', 'המרכז האקדמי לעיצוב ולחינוך ויצו – חיפה ע”ש נרי בלומפילד', 'המרכז האקדמי פרס', 'המרכז האקדמי רופין', 'המרכז האקדמי שלם', 'המרכז האקדמי שערי מדע ומשפט', 'המרכז הבינתחומי הרצליה', 'הקריה האקדמית אונו', 'מכון ויצמן למדע', 'מכון טכנולוגי חולון – HIT', 'מכון שכטר למדעי היהדות', 'מכללה אקדמית לחינוך “אורנים”', 'מכללה ירושלים', 'מכללת לוינסקי לחינוך', 'מכללת סכנין להכשרת עובדי הוראה', 'סמינר הקיבוצים – המכללה לחינוך לטכנולוגיה ולאומנויות', 'עזריאלי- מכללה אקדמית להנדסה ירושלים', 'שנקר. הנדסה. עיצוב. אמנות', 'תלפיות – המכללה האקדמית לחינוך']

     return <>
     
     <FilterSelection dataToFilter={institutes}/>
     </>
}


export default Setup
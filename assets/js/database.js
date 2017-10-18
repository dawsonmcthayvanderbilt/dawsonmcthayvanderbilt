var HealthRisks = document.getElementById('HealthRisk');
var main = document.getElementById('main');


HealthRisks.addEventListener('click', function(e)
{
    e.preventDefault(); // don't navigate to <a> tag href
    if (e.target.tagName === 'A') 
    {
        switch(e.target.textContent)
        {
            case "Accidents(unintentional injuries)":
            main.textContent ="Do not drive under the influence of drugs or alcohol. \n  Make well-advised decisions that reduce risk of accidental injury."; 
            break;
            
            case "Alzheimer's Disease":
            main.textContent ="Physical exercise, eat a Mediterranean diet(fresh vegetables and fruits; whole grains; olive oil; nuts; legumes; fish; moderate amounts of poultry, eggs, and dairy). \n  Get enouth sleep(aim for 7-8 hours)"; 
            break;
            
            case "Anemia":
            main.textContent ="Eat a vitamin-rich diet(iron, folate, vitamin B-12, vitamin C). \n  Consider taking a multivatamin. Prevent malaria because anemia can be a complication of malaria."; 
            break;
            
            case "Aortic  Aneurysm and Dissection":
            main.textContent ="Control blood pressure, do not smoke, maintain an ideal weight(low-salt diet, plenty of fruits, vegatables and whole grains and exercise daily). \n  Wear a seat belt(reduces risk of traumatic injury to chest area)."; 
            break;
            
            case "Assualt (Homocide)":
            main.textContent ="Learn self-defense techniques. Stay away from dangerous situations and dangerous people."; 
            break;
            
            case "Atherosclerosis":
            main.textContent ="Stop smoking, exercise most days of the week, eat healthy foods, manage stress, maintain a healthy weight."; 
            break;
            
            case "Benign or in situ or unknown cancers":
            main.textContent ="Reduce your risk of getting cancers by not using tobacco products, eating a healthy diet(plenty of fruits and vegetables, \n alcohol in moderation, limited processed meats), and maintaing a healthy weight and being physically active."; 
            break;
            
            case "Bladder Cancer":
            main.textContent ="Do not smoke, limit exposure to dangerous chemicals, drink plenty of fluids(there is evidence that drinking lots of water may lower a person's risk of bladder cancer), eat plenty of fruits and vegatables."; 
            break;
            
            case "Breast Cancer":
            main.textContent ="Limit alcohol, don't smoke, control your weight, be physically active, breast-feed, limit dose and duration of hormone therapy, avoid exposure to radiation and environmental pollution."; 
            break;
            
            case "Cancer of the Central Nervous System":
            main.textContent ="Avoid harmful radiation exposure."; 
            break;
            
            case "Cerebrovascular Diseases":
            main.textContent ="Quitting smoke, getting regular physical exercise, eating a heart-healthy, low-fat diet, \n  avoiding obesity, controlling blood pressure and hypertension, lowering cholesterol, and avoiding chronic stress or anger all help prevent cerebrovascular disease."; 
            break;
            
            case "Perinatal Conditions":
            main.textContent ="To learn about personal risks of perinatal conditions, risk assessment is done by evaluating an individual's medical history and conducting a physical examination.  Preventative diets, \n  genetic interventions, family planning, and immunization are all prevention techniques used to avoid perinatal conditions."; 
            break;
            
            case "Cervical Cancer":
            main.textContent ="Find cervical pre-cancers(have testing to find pre-cancers before they turn into invasivie cancer). \n Avoid exposure to HPV, get an HPV vaccine, do not smoke."; 
            break;
            
            case "Cholelithiasis and other disorders of gallbladder":
            main.textContent ="Improve you diet(eat low-fat, high fiber foods to prevent an increase of bile production, avoid alcohol and tobacco, and trans fatty acids), exercise, stay hydrated, talk to your Doctor about hormone therapy."; 
            break;

            case "Chronic Liver Disease and Cirrhosis":
            main.textContent ="Drink alcohol in moderation. \n Avoid risky behavior. \n Get vaccinated. \n Use medication wisely. \n Avoid contact with other people's blood and body fluids. \n Take care with aerosol sprays. \n Protect your skin. \n Maintain a healthy weight."; 
            break;
            case "Chronic Lower Respiratory Diseases":
            main.textContent ="Avoid exposure to tobacco smoke, home and workplace air pollutants, and respiratory infections. \n Wash hands regularly. \n Test for spirometry to measure pulmonary function every couple years."; 
            break;
            case "Colorectal Cancer":
            main.textContent ="Screen regularly for Colorectal cancer. (age 50 and up highly recommended) \n Research family history for Colorectal cancer. \n Manage your diet, body weight and physcial activity. \n Avoid excessive consumption of alcohol. \n Don't smoke. \n Stick to a diet high in vitamins, calcium, and magnesium. \n "; 
            break;
            case "Congenital Malformations, Deformations and Chromosomal":
            main.textContent ="Maintain a healthy diet that include a wide variety of fruit and vegetables, vitamins, etc. \n Avoid harmful substances when pregnant. \n Try to avoid travel when pregnant. \n Reduce or eliminate exposure to hazardous substances during pregnancy. \n Get vaccinated. \n Control diabetes and weight. \n Screen for routine infections."; 
            break;
            case "Diabetes Mellitus":
            main.textContent ="Eat healthy foods. \n Maintain a good excercise regimine. \n Avoid becoming overweight and lose excess pounds."; 
            break;
            case "Enterocolitis due to Clostridium Difficile":
            main.textContent ="Make sure to maintain healthy bacteria level, especially when taking antibiotics. \n Maintain a healthy diet and drink fluids regulary. \n "; 
            break;
            case "Essential Hypertension and Hypertensive Renal Disease":
            main.textContent ="Avoid smoking or quit smoking. \n Drink alcohol in moderation. \n Maintain a healthy weight or lose weight if obese or overweight. \n Maintain a healthy diet. \n Lower the consumption of sodium in your diet. \n Excercise regularly."; 
            break;
            case "Heart Diseases":
            main.textContent ="Don't smoke of use tobacco. \n Excercise regularly (about 30 min most days of the week. \n Eat a heart healthy diet. \n Drink alcohol in moderation."; 
            break;
            case "Hernia":
            main.textContent ="Don't smoke. \n  Visit a doctor when sick to avoid development of a persistent cough. \n  Maintain a healthy body weight. \n  Avoid straining during bowel movements or urination. \n  Lift heavy objects carefully and with your knees rather than your back. \n Avoid lifting weights that are too heavy for you."; 
            break;
            case "Human Immunodeficiency Virus (HIV) Disease":
            main.textContent ="Get tested and know your partner's HIV status. \n Have less risky sex. \n Use condoms. \n Limit your number of sexual partners. \n Get tested and treated for STDs. \n Talk to your health care provider about pre-exposure prophylaxis (PrEP). \n Don't inject drugs. \n  "; 
            break;
            case "Hyperplasia of Prostate":
            main.textContent ="Maintain a healthy diet with a lot of fruits in vegetables. \n Eat low-fat foods. \n Maintain a healthy body weight. \n Excercise regularly. \n Manage stress. \n Stick to a regular sleep schedule and avoid smoking. \n Avoid exposure to toxins. \n Cut caffeine intake. \n Limit alcohol intake. \n Stay warm if in cold environments."; 
            break;
            case "Hypertension or Hypertensive Kidney Disease":
            main.textContent ="Maintain a healthy diet and excercise regimine. \n Quit smoking. \n Maintain a healthy sodium intake in your diet. \n Understand food labels to help in your diet. \n Lose weight if overweight or obese."; 
            break;
            case "In Situ Neoplasms, Benign Neoplasms and Neoplasms of Uncertain or Unknown Behavior":
            main.textContent ="Maintain a healthy diet with low or moderate sodium levels.\n Don't smoke. \n Drink alcohol in moderation. \n Maintain a healthy weight and excercise regularly. "; 
            break;
            case "Influenza and Pneumonia":
            main.textContent ="Avoid close contact with sick people. \n Avoid touching your eyes, nose or mouth. \n Get vaccinated. \n Wash your hands with soap and water. \n Clean and disinfect surfaces that may be contaminated. \n Quit smoking. \n"; 
            break;
            case "Intentional Self-harm (suicide)":
            main.textContent ="Seek medical help and if you have, stick to your treatment plan. \n Recognize the situations or feelings that might trigger your desire to self-harm. \n Take care of yourself. \n Avoid alcohol or recreational drugs. \n Take appropriate care of your wounds if you injure yourself. \n Connect with others who can support you. \n Challenge the negative thoughts. \n Get enough sleep, eat well, and excercise regularly.\n Find ways to handle stress and improve your self-esteem."; 
            break;
            case "Uterine Cancer":
            main.textContent ="Maintain a healthy diet and lifestyle. If you have diabetes, good disease management, such as regularly monitoring blood glucose levels, can lower risk."; 
            break; 
            
            case "Stomach Cancer":
            main.textContent ="To help reduce your risk, avoid a diet that is high in smoked and pickled foods and salted meats and fish. Also, avoid using tobacco and maintain a helthy body weight and lifestyle"; 
            break;

            case "Skin Cancer":
            main.textContent ="Seek the shade, especially between 10 AM and 4 PM. Do not burn. \n Avoid tanning and UV tanning beds.\n Cover up with clothing, including a broad-brimmed hat and UV-blocking sunglasses.\n Use a broad spectrum (UVA/UVB) sunscreen with an SPF of 15 or higher every day. For extended outdoor activity, use a water-resistant, broad spectrum (UVA/UVB) sunscreen with an SPF of 30 or higher.\n Apply 1 ounce (2 tablespoons) of sunscreen to your entire body 30 minutes before going outside.Reapply every two hours or immediately after swimming or excessive sweating.\n Keep newborns out of the sun. Sunscreens should be used on babies over the age of six months.\n Examine your skin head-to-toe every month.\n See your physician every year for a professional skin exam."; 
            break;
            
            case "Septicemia":
            main.textContent ="avoid smoking.\n avoid illegal drugs \n eat a healthy diet \n exercise \n wash your hands regularly \n stay away from people who are sick"; 
            break;
            
            case "Prostate Hyperplasia":
            main.textContent ="Avoid use of over-the-counter antihistamines and decongestants: Use of these medications can aggravate BPH symptoms. Don't hold it: Delaying urination can worsen BPH symptoms and even result in urinary tract infections. When you have to go, go."; 
            break;
            
            case "prostate Cancer":
            main.textContent ="healthy diet and healthy food choices reduce the risk of prostate cancer"; 
            break;
            
            case "Pneumonitis ":
            main.textContent ="Vaccines can help prevent certain types of pneumonia. Good hygiene, quitting smoking, and keeping your immune system strong by exercising and healthy eating are other ways to prevent pneumonia."; 
            break;
            
            case "Pneumoconiosis":
            main.textContent ="Wearing a mask \n Washing areas of skin that come in contact with dust \n  Safe removal of dust from clothing \n Washing your face and hands thoroughly before eating, drinking, or taking any medicines \n Not smoking\n Letting your doctor and your employer know about any symptoms of pneumoconiosis\n Getting regular chest X-rays and physical exams\n Getting a yearly flu shot. The flu is a common cause of pneumonia. Because of that, getting a flu shot every year can help prevent both the flu and pneumonia.\n Getting the pneumococcal pneumonia vaccine"; 
            break;
            
            case "Peptic ulcer":
            main.textContent ="Stop smoking. Practice moderation. Heavy consumption of alcohol and has been shown to contribute to the development of ulcers, so keep your intake to a minimum.\n Take nonsteroidal anti-inflammatory drugs (NSAIDS including aspirin and ibuprofen) with food, as this may decrease your risk of irritating the lining of your stomach. healthy diet"; 
            break;
            
            case "Parkinson's disease":
            main.textContent ="Research has shown that people who eat more fruits and vegetables, high-fiber foods, fish, and omega-3 rich oils (sometimes known as the Mediterranean diet) and who eat less red meat and dairy may have some protection against Parkinson's."; 
            break;
            
            case "Pancreatic cancer":
            main.textContent ="stop smoking. maintaining a healthy weight and a healthy diet may reduce the risk of pancreatic cancer."; 
            break;
            
            case "Ovarian Cancer":
            main.textContent ="Using oral contraceptives (birth control pills) decreases the risk of developing ovarian cancer, especially among women who use them for several years. gynecological surgery"; 
            break;
            
            case "Oral Cancer":
            main.textContent ="stop or dont start using tobacco. healthy diet and limiting alcohol consumption can all help reduce your risk of oral cancer. Also try to avoid direct sunlight to your lips."; 
            break;
            
            case "Nutritional deficiencies":
            main.textContent ="Maintain a healthy diet and lifestyle."; 
            break;
            
            case "Kidney Disease":
            main.textContent ="Maintain a healthy diet and lifestyle. Avoid tobacco, and over-consumption of alcohol"; 
            break;
            
            case "Lung Cancer":
            main.textContent ="Avoid tobacco products and second hand smoke. Maintain a healthy diet and lifestyle."; 
            break;
            
            case "Liver Cancer":
            main.textContent ="Maintain a healthy diet and lifestyle. Avoid over-consumption of alcohol and infection with the hepatitis B and C viruses"; 
            break;
            
            case "Laryngeal Cancer":
            main.textContent ="Maintain a healthy diet and lifestyle. Avoid tobacco products,over-consumption of alcohol, and the HPV virus"; 
            break;
            case "Kidney Cancer":
            main.textContent ="Maintian a healthy diet and lifestyle. Avoid tobacco products, over-consumption of alcohol, and high blood pressure."; 
            break;
            
            case "Medical Complications":
            main.textContent ="There are no proven techniques to reduce the risk of death by medical complications."; 
            break;
        }
    }
});
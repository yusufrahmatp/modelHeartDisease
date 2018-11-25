from flask import Flask, redirect, url_for, request, jsonify
import model_loader

app = Flask(__name__)

@app.route('/heartdisease',methods = ['POST'])
def heartdisease():
    json_input = request.get_json()
    age = json_input['age']
    sex = json_input['sex']
    chest_pain_type = json_input['chest_pain_type']
    rest_blood_pressure = json_input['rest_blood_pressure']
    serum_cholestrol = json_input['serum_cholestrol']
    high_fasting_blood_sugar = json_input['high_fasting_blood_sugar']
    resting_ecg = json_input['resting_ecg']
    max_heart_rate = json_input['max_heart_rate']
    exercise_induced_angina = json_input['exercise_induced_angina']
    st_depression = json_input['st_depression']
    peak_exercise_st = json_input['peak_exercise_st']
    major_vessels_num = json_input['major_vessels_num']
    thal = json_input['thal']

    disease_type = model_loader.heart_disease_type(age, sex, chest_pain_type, rest_blood_pressure, serum_cholestrol, 
                high_fasting_blood_sugar, resting_ecg, max_heart_rate, exercise_induced_angina, 
                st_depression, peak_exercise_st, major_vessels_num, thal)

    return jsonify({'result' : 'Success', 'heart_disease_type' : disease_type})

if __name__ == '__main__':
   app.run(debug = True, port=5000)

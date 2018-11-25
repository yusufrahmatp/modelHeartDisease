import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from sklearn.externals import joblib
from sklearn.neural_network import MLPClassifier

def input_data(age, sex, chest_pain_type, rest_blood_pressure, serum_cholestrol, 
                high_fasting_blood_sugar, resting_ecg, max_heart_rate, exercise_induced_angina, 
                st_depression, peak_exercise_st, major_vessels_num, thal):

    my_list = [age, sex, chest_pain_type, rest_blood_pressure, serum_cholestrol, 
                high_fasting_blood_sugar, resting_ecg, max_heart_rate, exercise_induced_angina, 
                st_depression, peak_exercise_st, major_vessels_num, thal]
    test_new = pd.DataFrame(np.array(my_list).reshape(1,13))
    test_new.columns = ['age', 'sex', 'chest_pain_type', 'rest_blood_pressure', 'serum_cholestrol', 
                    'high_fasting_blood_sugar', 'resting_ecg', 'max_heart_rate', 'exercise_induced_angina',
                    'st_depression', 'peak_exercise_st', 'major_vessels_num', 'thal']
    test = pd.read_csv('../data/tubes2_HeartDisease_test.csv')
    
    test.columns = ['age', 'sex', 'chest_pain_type', 'rest_blood_pressure', 'serum_cholestrol', 
                    'high_fasting_blood_sugar', 'resting_ecg', 'max_heart_rate', 'exercise_induced_angina',
                    'st_depression', 'peak_exercise_st', 'major_vessels_num', 'thal']
    test = test.append(test_new, ignore_index = True)
    test = test.replace('?', np.nan).astype(float)
    print(test)
    return test

def preprocessed_input(test):
    categorical_attributes = [
        "sex", "chest_pain_type", "high_fasting_blood_sugar", "resting_ecg", 
        "exercise_induced_angina", "peak_exercise_st", "major_vessels_num", "thal"]
    series_attributes = ["age", "rest_blood_pressure", "serum_cholestrol", "max_heart_rate", "st_depression"]
    test[categorical_attributes] = test[categorical_attributes].fillna(test.mode().iloc[0])
    test[series_attributes] = test[series_attributes].fillna(test.mean())
    test[categorical_attributes] = test[categorical_attributes].astype('category')
    test = test.drop('thal', 1)
    test = test.drop('major_vessels_num', 1)
    
    test = pd.get_dummies(test, prefix=[
        "sex", "chest_pain_type", "high_fasting_blood_sugar", "resting_ecg", 
        "exercise_induced_angina", "peak_exercise_st"])
    for i in range(0,141):
        test = test.drop([i])
    print(test)
    return test

def predict_input(imported_model, test):
    test = np.array(test)
    predicted_test = imported_model.predict(test)
    return predicted_test


def main():
    imported_model = joblib.load('../models/heart_disease.joblib')
    # hardcode input please change later
    test = input_data(999.0, 1.0, 2.0, 160.0, 267.0, 1.0, 1.0, 157.0, 0.0, 0.5, 2.0, 0.0, 7.0)
    test = preprocessed_input(test)
    result = predict_input(imported_model, test)
    print("Result = ", result)

main()




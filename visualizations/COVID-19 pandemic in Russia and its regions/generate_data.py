import pandas as pd


prefix = 'github/covid-russia/data-'
subject, federal_district, date, new_positive_case, positive_cases_variation, healed, died = [], [], [], [], [], [], []
df_infected = pd.read_csv(prefix + 'infected.csv')
df_healed = pd.read_csv(prefix + 'healed.csv')
df_died = pd.read_csv(prefix + 'died.csv')
date_columns = df_infected.columns[2:]


for index, row in df_infected.iterrows():
    for i in range(1, len(date_columns)):
        subject.append(row['Субъект'])
        federal_district.append(row['Федеральный Округ'])
        date.append(date_columns[i] + '.2020')
        new_positive_case.append(row[date_columns[i]] - row[date_columns[i-1]])

for index, row in df_healed.iterrows():
    for i in range(1, len(date_columns)):
        healed.append(row[date_columns[i]] - row[date_columns[i-1]])

for index, row in df_died.iterrows():
    for i in range(1, len(date_columns)):
        died.append(row[date_columns[i]] - row[date_columns[i-1]])


for i in range(len(new_positive_case)):
    positive_cases_variation.append(new_positive_case[i] - healed[i] - died[i])


pd.DataFrame(data={
    'Subject': subject, 
    'Federal District': federal_district, 
    'Date': date,
    'New Positive Cases': new_positive_case,
    'Positive Cases Variation': positive_cases_variation,
    'Healed': healed,
    'Died': died
}).to_csv('data.csv', index=False)

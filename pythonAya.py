from pymatgen import MPRester, Composition
import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
import pymatgen as pmg
from sklearn.linear_model import LinearRegression
import matplotlib.pyplot as plt
from sklearn.metrics import mean_squared_error
from sklearn.tree import DecisionTreeRegressor
from sklearn.ensemble import RandomForestClassifier
import math
from itertools import combinations
from math import *




mpr = MPRester("Jebr28S9U0xyyHzs")


data = mpr.get_data("NaCl", prop = "elements" )
data = pd.DataFrame(data)


data1 = mpr.get_data("NaCl", prop = "band_gap" )
data1 = pd.DataFrame(data1)

data['band_gap'] = data1['band_gap']



data3 = mpr.get_data("NaCl", prop = "density" )
data3 = pd.DataFrame(data3)

data['density'] = data3['density']


data4 = mpr.get_data("NaCl", prop = "energy" ) #lattice energy(how strong an ionic bond is)
data4 = pd.DataFrame(data4)

data['energy'] = data4['energy']



data['elements_electronegativity1'] = data['elements'] 
for index, row in data.iterrows():
    data.loc[index, "elements_electronegativity1"] = pmg.Element(data.iloc[index,0][0]).X
    
data['elements_electronegativity2'] = data['elements'] 
for index, row in data.iterrows():
    data.loc[index, "elements_electronegativity2"] = pmg.Element(data.iloc[index,0][1]).X
  
    
data['atomic_num1'] = data['elements'] 
for index, row in data.iterrows():
    data.loc[index, "atomic_num1"] = pmg.Element(data.iloc[index,0][0]).number
    
data['atomic_num2'] = data['elements'] 
for index, row in data.iterrows():
    data.loc[index, "atomic_num2"] = pmg.Element(data.iloc[index,0][1]).number


data['elements_atomic_radius1'] = data['elements'] 
for index, row in data.iterrows():
    data.loc[index, "elements_atomic_radius1"] = pmg.Element(data.iloc[index,0][0]).atomic_radius_calculated

data['elements_atomic_radius2'] = data['elements'] 
for index, row in data.iterrows():
    data.loc[index, "elements_atomic_radius2"] = pmg.Element(data.iloc[index,0][1]).atomic_radius_calculated
  
  
data['elements_atomic_mass1'] = data['elements'] 
for index, row in data.iterrows():
    data.loc[index, "elements_atomic_mass1"] = pmg.Element(data.iloc[index,0][0]).atomic_mass

data['elements_atomic_mass2'] = data['elements'] 
for index, row in data.iterrows():
    data.loc[index, "elements_atomic_mass2"] = pmg.Element(data.iloc[index,0][1]).atomic_mass
    
    

print(data.shape)
file1 = data.to_csv(r'/home/bandgap_project_data1.csv') 
#print(data.head())

data = data.drop(data[data.atomic_num1 >= 51].index & data[data.atomic_num1 <= 71].index)
data = data.drop(data[data.atomic_num1 >= 89].index & data[data.atomic_num1 <= 103].index)
data = data.drop(data[data.atomic_num2 >= 51].index & data[data.atomic_num2 <= 71].index)
data = data.drop(data[data.atomic_num2 >= 89].index & data[data.atomic_num2 <= 103].index)

file2 = data.to_csv(r'/home/bandgap_project_data2.csv') 

print(data.shape)
data = data.dropna()
print(data.shape)
file3 = data.to_csv(r'/home/bandgap_project_data3.csv') 



##Plotting

e1 = data['elements_electronegativity1'].astype(float)#.values # electronegativity of all first elements 
e2 = data['elements_electronegativity2'].astype(float)#.values # electronegativity of all second elements
band_gap = data['band_gap'].values

plt.title(' Band Gap and Electronegativity Difference')
plt.ylabel('Band Gap (eV)')
plt.xlabel('Electonegativity')
n = e1%e2
plt.scatter(n, band_gap, c = 'b')
plt.show()
data['electronegativity_diff'] = n.tolist()



r1 = data['elements_atomic_radius1'].astype(float)#.values # atomic radius of all first elements 
r2 = data['elements_atomic_radius2'].astype(float)#.values # atomic radius of all second elements

plt.title('Band Gap and Atomic Radius Difference')
plt.ylabel('Band Gap (eV)')
plt.xlabel('Atomic Radius')
r = r1%r2
plt.scatter(r, band_gap, c = 'r')
plt.show()
data['atomic_radius_diff'] = r.tolist() ######################### comeback and scheck these vals
print(type(r))
print(r)


m1 = data['elements_atomic_mass1'].astype(float)#.values # atomic mass of all first elements 
m2 = data['elements_atomic_mass2'].astype(float)#.values # atomic mass of all second elements

plt.title('Band Gap and Atomic Mass Difference')
plt.ylabel('Band Gap (eV)')
plt.xlabel('Atomic Mass')
m = m1%m2
plt.scatter(m, band_gap, c = 'g')
plt.show()
data['atomic_mass_diff'] = m.tolist()


file4 = data.to_csv(r'/home/bandgap_project_data4.csv')



E = data['energy'].astype(float) # energy of compounds 

plt.title('Band Gap and Energy')
plt.ylabel('Band Gap (eV)')
plt.xlabel('Energy')
plt.scatter(E, band_gap, c = 'y')
plt.show()
#E = E.tolist()


d = data['density'].astype(float) # energy of compounds 

plt.title('Band Gap and Density')
plt.ylabel('Band Gap (eV)')
plt.xlabel('Energy')
plt.scatter(d, band_gap, c = 'k')
plt.show()
#d = d.tolist()
new_features = {'electronegativity_diff': n, 'atomic_radius_diff': r, 'atomic_mass_diff': m, 'Energy': E, 'Density': d, 'band_gap': band_gap}
new_features = pd.DataFrame(new_features)
#### KRR

features = ['electronegativity_diff', 'atomic_radius_diff', 'atomic_mass_diff', 'energy', 'density' ] 
feature = [n, r, m, E, d]
target = ['band_gap']
x = data[features]
y = data[target]



from itertools import product
import itertools

#creates features of one function
def all_functions(x):
    func1 = x
    func2 = (np.sqrt(x))
    func3 = (np.square(x))
    func4 = (1/x)
    array1 = np.array([func1, func2, func3, func4]) #takes our input x and plugs it in our functions and then places it in an array
    nentries = len(array1[0]) 
    array2 = []
    for i in range(nentries):
        temp_list = []
        for k in array1:
            temp_list.append(k[i])
        array2.append(temp_list)
    array2 = np.array(array2)
    return(array2)

n_func = all_functions(n)
r_func = all_functions(r)
m_func = all_functions(m)
E_func = all_functions(E)
d_func = all_functions(d)


import csv
# =============================================================================
# with open('/home/bandgap_project_data4.csv', 'w') as my_csv:
#     csvwriter = csv.writer(my_csv, delimiter = ',')
#     csvwriter.writerows(n_func)
# =============================================================================
# =============================================================================
# np.savetxt('/home/bandgap_project_data4.csv', n_func, delimiter = ',')    
# =============================================================================

def new_rows(file, a1):
    with open(file, "a") as myCsv:
        csvWriter = csv.writer(myCsv, delimiter=',')
        csvWriter.writerows(a1)
    return(file)

new_rows('/home/bandgap_project_data4.csv', n_func)

def combo(f1, f2):
    temp = []
    for a, b in zip(f1, f2):
        new_list = [c*d for c, d in product(a, b)]
        temp.append(new_list)       
    return(temp)

combo_nr = combo(n_func, r_func)
combo_nm = combo(n_func, m_func)
combo_nE = combo(n_func, E_func)
combo_nd = combo(n_func, d_func)
combo_rm = combo(n_func, m_func)
combo_rE = combo(n_func, E_func)
combo_rd = combo(n_func, d_func)
combo_mE = combo(n_func, E_func)
combo_md = combo(n_func, d_func)
combo_Ed = combo(n_func, d_func)





def combos(f1, f2, f3):
    new = []
    for a, b, c in zip(f1, f2, f3):
        new_list = [d*e*f for d, e, f in product(a, b, c)]
        new.append(new_list) 
    return(new)

combos_nrm = combos(n_func, r_func, m_func)
combos_nrE = combos(n_func, r_func, E_func)
combos_nrd = combos(n_func, r_func, d_func)
combos_nmE = combos(n_func, m_func, E_func)
combos_nmd = combos(n_func, m_func, d_func)
combos_nEd = combos(n_func, E_func, d_func)
combos_rmE = combos(r_func, m_func, E_func)
combos_rmd = combos(r_func, m_func, d_func)
combos_rEd = combos(r_func, E_func, d_func)
combos_mEd = combos(m_func, E_func, d_func)


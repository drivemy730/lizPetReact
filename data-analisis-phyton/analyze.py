import pandas as pd
from database_connect import connect_to_db


#Contiene funciones para la manipulación de datos y análisis utilizando Pandas.
#Incluye operaciones como filtrado, agrupación, estadísticas básicas 
#y cualquier lógica relacionada con el tratamiento de los datos obtenidos
#de la base de datos.



def fetch_users():
    connection = connect_to_db()
    if connection:
        query = "SELECT * FROM users"
        df_users = pd.read_sql(query, connection)
        connection.close()
        return df_users

def fetch_carts():
    connection = connect_to_db()
    if connection:
        query = "SELECT * FROM carts"
        df_carts = pd.read_sql(query, connection)
        connection.close()
        return df_carts

def analyze_users(df_users):
    print("Total de usuarios:", len(df_users))
    print("Usuarios únicos por dirección:")
    print(df_users['user_address'].value_counts())

def analyze_carts(df_carts):
    print("Productos más comprados:")
    print(df_carts.groupby('product_name')['product_quantity'].sum())

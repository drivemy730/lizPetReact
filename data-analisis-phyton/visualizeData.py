import matplotlib.pyplot as plt



#Aloja funciones para la creación de gráficos utilizando Matplotlib o Seaborn.
#Puedes agregar gráficos como barras, líneas, histogramas o cualquier visualización 
#útil para entender los datos.

def plot_top_products(df_carts):
    top_products = df_carts.groupby('product_name')['product_quantity'].sum()
    top_products = top_products.sort_values(ascending=False)

    plt.figure(figsize=(10, 6))
    top_products.plot(kind='bar', color='skyblue')
    plt.title('Productos Más Comprados')
    plt.xlabel('Producto')
    plt.ylabel('Cantidad')
    plt.xticks(rotation=45)
    plt.show()

def plot_users_by_address(df_users):
    user_counts = df_users['user_address'].value_counts()

    plt.figure(figsize=(8, 8))
    user_counts.plot(kind='pie', autopct='%1.1f%%', startangle=140, cmap='Pastel1')
    plt.title('Distribución de Usuarios por Dirección')
    plt.ylabel('')
    plt.show()

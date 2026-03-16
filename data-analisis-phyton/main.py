


from analyze import fetch_users, fetch_carts, analyze_users, analyze_carts
from visualizeData import plot_top_products, plot_users_by_address


#Actúa como el punto de entrada al programa.
#Gestiona el flujo general:
#Llama al módulo de conexión a la base de datos para obtener datos.
#Usa las funciones de analysis.py para procesar y analizar los datos.
#Llama a visualization.py para generar gráficos o visualizaciones


if __name__ == "__main__":
    # Fetch data
    users_df = fetch_users()
    carts_df = fetch_carts()

    # Analyze data
    analyze_users(users_df)
    analyze_carts(carts_df)

    # Visualize data
    plot_top_products(carts_df)
    plot_users_by_address(users_df)

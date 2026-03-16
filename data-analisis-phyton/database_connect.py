import mysql.connector


def connect_to_db():
    try:
        connection = mysql.connector.connect(
            host="localhost",
            user="root",
            password="",  # Contraseña de Laragon (por defecto es vacío)
            database="liz_pet_store"
        )
        print("Conexión exitosa.")
        return connection
    except mysql.connector.Error as err:
        print(f"Error: {err}")
        return None

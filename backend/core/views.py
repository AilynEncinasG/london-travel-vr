from django.db import connections
from django.http import JsonResponse


def verificar_salud(request):
    """
    Comprueba que Django se encuentre activo y que pueda
    comunicarse correctamente con la base de datos.
    """
    base_datos_disponible = True

    try:
        with connections["default"].cursor() as cursor:
            cursor.execute("SELECT 1")
    except Exception:
        base_datos_disponible = False

    estado = "saludable" if base_datos_disponible else "degradado"
    codigo_http = 200 if base_datos_disponible else 503

    return JsonResponse(
        {
            "servicio": "backend",
            "estado": estado,
            "base_datos": base_datos_disponible,
        },
        status=codigo_http,
    )
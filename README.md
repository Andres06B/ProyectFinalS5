# 🏨 Desarrollo de Aplicación Web de Administración Hotelera

## Desarrolladores:
- Andrés Berrio
- Jesús Dávila
- Milton Berrio
- Manuel Ruiz
- Eduardo Solano

---

## 📄 Descripción del Proyecto:
Este proyecto consiste en la creación de dos aplicaciones web interconectadas:
- **App Web de Administración Hotelera**: dirigida al personal administrativo del hotel para gestionar de manera eficiente los recursos y operaciones internas.
- **App Web para Usuarios**: destinada a los clientes para facilitar la reserva de habitaciones, gestionar su perfil y acceder a los servicios del hotel.

El objetivo es optimizar tanto la administración interna del hotel como la experiencia del usuario, utilizando tecnologías modernas y escalables para garantizar un rendimiento robusto y eficiente.

---

## 🎯 Objetivos del Proyecto:
- **Automatizar y mejorar la gestión hotelera**: Proveer herramientas para gestionar usuarios, habitaciones, pagos, y obtener estadísticas clave sobre el rendimiento del hotel.
- **Mejorar la experiencia del cliente**: Los usuarios podrán gestionar sus reservas de manera intuitiva, acceder a facturas y recibir recomendaciones personalizadas sobre actividades y servicios.

---

## 🛠️ Entornos y Tecnologías Utilizadas:

- **Entorno de Desarrollo**: Visual Studio Code (VSC)
- **Frontend**: Angular (v14), HTML5, CSS3, Bootstrap 5
- **Backend**: Go (Golang) con soporte para API RESTful
- **Base de Datos**: MySQL para almacenamiento relacional y eficiente de datos

---

## 🌐 Características de la App Web para Usuarios:

### Página Principal:
- **Navegación intuitiva**: Inicio, Habitaciones, Servicios, Reservas.
- **Presentación dinámica de habitaciones**: Muestra habitaciones disponibles con detalles y opciones de reserva en tiempo real.
- **Sistema de reservas en línea**: Integración de pagos en línea, con confirmación inmediata vía correo electrónico.
- **Información detallada del hotel**: Sección "Nosotros", destacando la historia, servicios y ubicación del hotel.

### Dashboard del Usuario:
- **Perfil personalizado**: El usuario puede modificar su perfil, gestionar acompañantes y habitaciones.
- **Gestión de reservas**: Modificaciones a las reservas existentes, acceso a la información detallada de las mismas y cancelaciones.
- **Facturación**: Descarga de facturas electrónicas, historial de reservas y pagos.
- **Sugerencias de actividades**: Recomendaciones automáticas basadas en la temporada, intereses y la ubicación.

---

## 🛡️ Características de la App Web Administrativa:

### Panel Administrativo:
- **Gestión de usuarios**: Crear, editar, eliminar y gestionar perfiles de clientes.
- **Control de habitaciones**: CRUD de habitaciones, disponibilidad en tiempo real y gestión de servicios adicionales.
- **Pagos y facturación**: Visualización y gestión de pagos, generación automática de facturas y reporte de ingresos.
- **Estadísticas del hotel**: Visualización en tiempo real de indicadores clave (reservas activas, ingresos, ocupación, etc.), optimizando la toma de decisiones.

### Seguridad:
- **Autenticación y Autorización**: Implementación de JWT (JSON Web Tokens) para garantizar la seguridad en el acceso a los recursos del sistema.
- **Roles y Permisos**: Separación de usuarios y administradores, asegurando que cada rol tenga acceso limitado según sus responsabilidades.

---

## 🚀 Flujo de Trabajo:

### Frontend:
Desarrollado con **Angular**, utilizando componentes reutilizables y un sistema de rutas eficiente para garantizar una experiencia fluida. **HTML5** y **CSS3** aseguran personalización visual avanzada, mientras que **Bootstrap 5** garantiza diseño responsivo y adaptable a todos los dispositivos. Además, el frontend está optimizado para un rendimiento rápido y una carga eficiente de datos desde el backend.

### Backend:
El backend se desarrolla con **Go (Golang)**, aprovechando su rendimiento y capacidad de manejar múltiples solicitudes concurrentes. Implementamos una arquitectura basada en **API RESTful**, permitiendo que las dos aplicaciones (administrativa y de usuario) interactúen con la base de datos de manera eficiente y escalable.

- **MySQL** gestiona los datos del hotel, proporcionando un sistema seguro y rápido de acceso a la información.
- **Servicios de API**: Las API se encargan de manejar las solicitudes para reservas, facturación, y estadísticas, garantizando respuestas rápidas y confiables.

### Integración del Backend y Frontend:
- **API RESTful**: Comunicación fluida entre frontend y backend a través de endpoints definidos, garantizando que tanto los administradores como los usuarios reciban y gestionen la información de manera óptima.
- **Manejo de errores y validaciones**: Tanto en el frontend como en el backend, se han implementado validaciones robustas para evitar errores en las reservas, pagos y demás operaciones críticas.

---

## 🏁 Conclusión:
Este proyecto busca revolucionar la administración hotelera con una plataforma web moderna y altamente funcional, que no solo optimice los procesos internos, sino que también mejore significativamente la experiencia del usuario. Utilizando un enfoque ágil y tecnologías actuales como **Angular**, **Golang**, y **MySQL**, garantizamos una solución escalable, segura y eficiente para el sector hotelero.

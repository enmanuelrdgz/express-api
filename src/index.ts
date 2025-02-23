import express, { Request, Response } from 'express';
import os from 'os';

// Crear una instancia de Express
const app = express();
const port = 3000;

// Ruta para obtener la hora del servidor
app.get('/', (req: Request, res: Response) => {
    // Obtener la fecha y hora actual
    const ahora = new Date();
    const hora = ahora.toLocaleTimeString();

    //uptime
    const uptimeSeconds: number = os.uptime();

    //total memory
    const totalMemoryBytes = os.totalmem();

    // Función para formatear el tiempo en días, horas, minutos y segundos
    function formatUptime(seconds: number): string {
        const days = Math.floor(seconds / (3600 * 24));
        const hours = Math.floor((seconds % (3600 * 24)) / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const remainingSeconds = Math.floor(seconds % 60);
    
        return `${days} days, ${hours} hours, ${minutes} minutes, ${remainingSeconds} seconds`;
    }

    // Función para convertir bytes a una unidad legible (GB, MB, etc.)
    function formatMemory(bytes: number): string {
        const units = ['B', 'KB', 'MB', 'GB', 'TB'];
        let unitIndex = 0;
        
        while (bytes >= 1024 && unitIndex < units.length - 1) {
        bytes /= 1024;
        unitIndex++;
        }
    
        return `${bytes.toFixed(2)} ${units[unitIndex]}`;
    }

    const uptime = formatUptime(uptimeSeconds);
    const totalMem = formatMemory(totalMemoryBytes);

    // Enviar la hora como respuesta
    res.json({ hora, uptime, totalMem});
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
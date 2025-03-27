export function formatDate(isoString: string) : string/*el otro string significa lo que vamos a retornar*/{
    const date = new Date(isoString)
    const formatter = new Intl.DateTimeFormat('es-ES',{
        year:'numeric',
        month: 'long',
        day: 'numeric'
    })
    return formatter.format(date)
}
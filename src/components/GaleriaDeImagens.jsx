import { useState } from "react";


function GaleriaDeImagens() {
    const [imagens, setImagens] = useState([
        'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExb2E0a2xhY2dpazF0MjEzdnJjeTYxNWwyM3IyZ2l6b211NHdrdG5iNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/bGgsc5mWoryfgKBx1u/giphy.webp',
        'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExb2E0a2xhY2dpazF0MjEzdnJjeTYxNWwyM3IyZ2l6b211NHdrdG5iNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/bGgsc5mWoryfgKBx1u/giphy.webp',
        'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExb2E0a2xhY2dpazF0MjEzdnJjeTYxNWwyM3IyZ2l6b211NHdrdG5iNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/bGgsc5mWoryfgKBx1u/giphy.webp'
    ]);

    const adicionarImagem = () => {
        setImagens([...imagens, 'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExb2E0a2xhY2dpazF0MjEzdnJjeTYxNWwyM3IyZ2l6b211NHdrdG5iNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/bGgsc5mWoryfgKBx1u/giphy.webp'])
    }

    return(
        <>
        <h2>Galeria de Imagens</h2>
        <div style={{display: 'flex',  flexWrap: 'wrap',  justifyContent: 'center'}}>

        {imagens.map((imagem, index) => (
            <img key={index} src={imagem} alt={`Imagem ${index + 1}`} style={{margin: '5px', maxWidth:'20em'}}/>
        ))}
        </div>
        <button onClick={adicionarImagem} style={{marginTop: '10px´'}}>Adicionar Imagem</button>
        </>
    )
}

export default GaleriaDeImagens
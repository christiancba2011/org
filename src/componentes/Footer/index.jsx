import "./Footer.css"

const Footer = () => {
    return  <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
    <div className='redes'>
        <a href='https://www.facebook.com/CHRISCBA' target="_blank">
            <img src="/img/facebook.png" alt='Facebook' />
        </a>
        <a href='https://twitter.com/christiabcba203' target="_blank">
            <img src="/img/twitter.png" alt='twitter' />
        </a>
        <a href='https://www.instagram.com/chriscba2011/' target="_blank">
            <img src="/img/instagram.png" alt='instagram' />
        </a>
    </div>
    <img src='/img/Logo.png' alt='org' />
    <strong>Desarrollado por Christian Francisco Martinez</strong>
</footer>
}

export default Footer
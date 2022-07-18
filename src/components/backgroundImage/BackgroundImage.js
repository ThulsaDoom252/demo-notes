import React from 'react';
import image from "./background.jpg"
import styleBackground from "./BackgroundImage.module.css"

const Wallpaper = () => {

    //---------------------------------------------------Feature in developing....
    // const [wallpaper, setWallpaper] = useState(null)
    //
    // const uploadRef = React.useRef(null)
    //
    //
    //
    //
    // const uploadWallpaper  = (e) => {
    //     setWallpaper(e.target.files[0])
    //     if (wallpaper == null) return;
    //     const wallpaperRef = ref(storage, `images/${wallpaper.name + v4()}`)
    //     uploadBytes(wallpaperRef, wallpaper).then(response => {
    //         console.log(response)
    //         alert('success')
    //     })
    // }
    //
    // window.storage = storage
    //
    // const handleClick = event => {
    //     uploadRef.current.click()
    // }

    return (
        <div className={styleBackground.container}>
            {/*<input type={"file"}  hidden={true} ref={uploadRef} onChange={uploadWallpaper}/>*/}
            {/*<button onClick={handleClick}>Change Wallpaper</button>*/}
            <img className={styleBackground.image} src={image} alt={'background image'}/>
        </div>

    )
}


export default Wallpaper;
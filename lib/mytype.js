function getType(suffix) {
    if (suffix === "unknown") return "-"
    let types = [
        "Image: ico 3dm 3ds max bmp dds gif jpg jpg_ jpeg png psd xcf tga thm tif tiff yuv ai eps ps svg dwg dxf gpx kml kmz webp ",
        "Video: video 3g2 3gp aaf asf avchd avi drc flv m2v m4p m4v mkv mng mov mp2 mp4 mpe mpeg mpg mpv mxf nsv ogg ogv ogm qt rm rmvb roq srt svi vob webm wmv yuv ",
        "Audio: aac aiff ape au flac gsm it m3u m4a mid mod mp3 mpa pls ra s3m sid wav wma xm ",
        "Archive: 7z a apk ar bz2 cab cpio deb dmg egg gz iso jar lha mar pea rar rpm s7z shar tar tbz2 tgz tlz war whl xpi zip zipx xz pak ",
        "Exec: exe msi bin command  bat crx a so o ",
        "Code: c cc class clj cpp cs cxx el go h java lua m m4 php pl po py rb rs sh swift vb vcxproj xcodeproj xml diff patch html js " +
        "html htm css js jsx less scss wasm php ",
        "Font: eot otf ttf woff woff2 ",
        "Text: doc docx ebook log md msg odt org pages rtf rst tex txt wpd wps data dat cnt tlog json pyi rc sh ",
        "Book: mobi epub azw1 azw3 azw4 azw6 azw cbr cbz pdf ppt odp ods xls xlsx csv ics vcf ",
    ]
    suffix = " " + suffix.replaceAll("_", "") + " "
    for (let i = 0; i < types.length; i++) {
        if (types[i].includes(suffix)) return types[i].split(":")[0]
    }
    return "-"
}

function getSuffix(filename) {
    let last = filename.substring(filename.length - 6)
    // console.log(last)
    if (!last.includes(".")) return "Unknown";
    let lastParts = last.split(".")
    // console.log(JSON.stringify(vContainer.bySuffix))
    return lastParts[lastParts.length - 1].toLowerCase()
}

module.exports = {getType, getSuffix}

const backgroundImgFixed = (img) => {
    return `
        <div class="row">
            <div class="background-img-fixed" style="background-image: url('../../${ img }');"></div>
        </div>
    `
}

module.exports = backgroundImgFixed;
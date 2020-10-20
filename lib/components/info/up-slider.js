const upSlider = (img01, title01, content01, img02, title02, content02, img03, title03, content03, img04, title04, content04) => {
    return `
    <div class="row up-down-padding">
    <div class="col-lg-6">
        <div style="width: 100%; overflow: hidden;">
            <img class="background-img-cover-back" src="../../${ img01 }" alt="${ img01 }" />
            <div class="background-img-cover">
                    <div class="card-body">
                      <h1 class="card-title">${ title01 }</h1>
                      <br>
                      <p class="card-text">${ content01 }</p>
                    </div>
            </div>
            <div class="background-img-cover-id">
            </div>
        </div>
    </div>
    <div class="col-lg-6">
        <div style="width: 100%; overflow: hidden;">
            <img class="background-img-cover-back" src="../../${ img02 }" alt="${ img02 }" />
            <div class="background-img-cover">
                    <div class="card-body">
                      <h1 class="card-title">${ title02 }</h1>
                      <br>
                      <p class="card-text">${ content02 }</p>
                    </div>
            </div>
            <div class="background-img-cover-id">
            </div>
        </div>
    </div>
    <div class="w-100" style="height: 30px"></div>
    <div class="col-lg-6">
        <div style="width: 100%; overflow: hidden;">
        <img class="background-img-cover-back" src="../../${ img03 }" alt="${ img03 }" />
        <div class="background-img-cover">
                <div class="card-body">
                  <h1 class="card-title">${ title03 }</h1>
                  <br>
                  <p class="card-text">${ content03 }</p>
                </div>
        </div>
            <div class="background-img-cover-id">
            </div>
        </div>
    </div>
    <div class="col-lg-6">
        <div style="width: 100%; overflow: hidden;">
        <img class="background-img-cover-back" src="../../${ img04 }" alt="${ img04 }" />
        <div class="background-img-cover">
                <div class="card-body">
                  <h1 class="card-title">${ title04 }</h1>
                  <br>
                  <p class="card-text">${ content04 }</p>
                </div>
        </div>
            <div class="background-img-cover-id">
            </div>
        </div>
    </div>
</div>
    `
}

module.exports = upSlider;
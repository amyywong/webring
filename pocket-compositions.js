var myRootDiv = document.getElementById("container");


for (var i = 0; i < 50; i++) {

    var firstVariable = 'replace me wiht some css';

    var myModule = `

        <div class="myClass" style="${ firstVariable }">
            <div class="diagonalLine" style="${ firstVariable }"></div>
            <div class="oval" style="${ firstVariable }"></div>
        </div>

    `;

    myRootDiv.insertAdjacentHTML('beforeend', myModule)


}

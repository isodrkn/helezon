document.getElementById('calculate-button').addEventListener('click', calculate);

function showForm() {
    const selection = document.getElementById('selection').value;
    const formContainer = document.getElementById('form-container');
    formContainer.innerHTML = '';

    if (selection == '1') {
        formContainer.innerHTML = `
            <h2>Helezon Konveyör Kapasite Hesabı</h2>
            <div class="form-group">
                <label>A = Helezon kesit alanı (m^2):</label>
                <input type="number" id="A" step="any">
            </div>
            <div class="form-group">
                <label>V = Aktarma hızı (m/dk):</label>
                <input type="number" id="V" step="any">
            </div>
            <div class="form-group">
                <label>Delta = Malzeme aşındırma faktörü:</label>
                <input type="number" id="Delta" step="any">
            </div>
            <div class="form-group">
                <label>k = Zemin açısı:</label>
                <input type="number" id="k" step="any">
            </div>
            <div class="form-group">
                <label>P = Malzeme yoğunluğu:</label>
                <input type="number" id="P" step="any">
            </div>
            <div class="form-group">
                <label>D = Helezon kanadının dış çapı (m):</label>
                <input type="number" id="D1" step="any">
            </div>
            <div class="form-group">
                <label>d = Helezon milinin iç çapı (m):</label>
                <input type="number" id="d1" step="any">
            </div>
            <div class="form-group">
                <label>S = Helezon hatvesi (m):</label>
                <input type="number" id="S" step="any">
            </div>
            <div class="form-group">
                <label>N = Helezon devri (devir/dakika):</label>
                <input type="number" id="N" step="any">
            </div>
        `;
    } else if (selection == '2') {
        formContainer.innerHTML = `
            <h2>Helezon Konveyörün Güç Hesabı</h2>
            <div class="form-group">
                <label>D = Helezon çapı (m):</label>
                <input type="number" id="D2" step="any">
            </div>
            <div class="form-group">
                <label>L = Helezon boyu (m):</label>
                <input type="number" id="L" step="any">
            </div>
            <div class="form-group">
                <label>H = Kaldırılacak dikey mesafe (m):</label>
                <input type="number" id="H" step="any">
            </div>
            <div class="form-group">
                <label>Q = Helezon kapasitesi (ton/saat):</label>
                <input type="number" id="Q" step="any">
            </div>
            <div class="form-group">
                <label>Mu = Malzeme direnç katsayısı (m):</label>
                <input type="number" id="Mu" step="any">
            </div>
        `;
    } else if (selection == '3') {
        formContainer.innerHTML = `
            <h2>Helezon Konveyörün Kanat Açım Hesabı</h2>
            <label>Lütfen Bulmak İstediğiniz Birimi Seçin:</label>
            <select id="sub-selection" onchange="showSubForm()">
                <option value="0">Seçiniz</option>
                <option value="1">b = Helezon kanadının genişliği (mm)</option>
                <option value="2">A = Helezonun bir kanat açımının dış çevresi</option>
                <option value="3">a = Helezonun bir kanat açımının iç çevresi</option>
                <option value="4">r = Helezonun kanat açımının iç radyüsü</option>
                <option value="5">R = Helezonun kanat açımının dış radyüsü</option>
                <option value="6">Omega = Kanat açınımı kenarları arasındaki açı</option>
            </select>
            <div id="sub-form-container"></div>
        `;
    } else if (selection == '4') {
    formContainer.innerHTML = `
        <h2>Hacimsel İletim Kapasitesi - Iv</h2>
        <div class="form-group">
            <label>D = Helezon çapı (m):</label>
            <input type="number" id="D4" step="any">
        </div>
        <div class="form-group">
            <label>d = Helezon milinin iç çapı (m):</label>
            <input type="number" id="d4" step="any">
        </div>
        <div class="form-group">
            <label>S = Helezon hatvesi (m):</label>
            <input type="number" id="S4" step="any">
        </div>
        <div class="form-group">
            <label>W = Doldurma faktörü:</label>
            <input type="number" id="W" step="any">
        </div>
        <div class="form-group">
            <label>N = Motor devir hızı (devir/dakika):</label>
            <input type="number" id="N" step="any">
        </div>
        <div class="form-group">
            <label>k = Eğim faktörü:</label>
            <input type="number" id="k1" step="any">
        </div>
    `;
    } else if (selection == '5') {
        formContainer.innerHTML = `
            <h2>Kütlesel İletim Kapasitesi - Im</h2>
            <div class="form-group">
                <label>D = Helezon çapı (m):</label>
                <input type="number" id="D5" step="any">
            </div>
            <div class="form-group">
                <label>d = Helezon milinin iç çapı (m):</label>
                <input type="number" id="d5" step="any">
            </div>
            <div class="form-group">
                <label>S = Helezon hatvesi (m):</label>
                <input type="number" id="S5" step="any">
            </div>
            <div class="form-group">
                <label>Ro = Yoğunluk:</label>
                <input type="number" id="Ro" step="any">
            </div>
            <div class="form-group">
                <label>N = Motor devir hızı (devir/dakika):</label>
                <input type="number" id="N" step="any">
            </div>
            <div class="form-group">
                <label>W = Doldurma faktörü:</label>
                <input type="number" id="W2" step="any">
            </div>
        `;
    }

}

function showSubForm() {
    const subSelection = document.getElementById('sub-selection').value;
    const subFormContainer = document.getElementById('sub-form-container');
    subFormContainer.innerHTML = '';

    if (subSelection == '1') {
        subFormContainer.innerHTML = `
            <div class="form-group">
                <label>D = Helezonun dış çapı (m):</label>
                <input type="number" id="D3" step="any">
            </div>
            <div class="form-group">
                <label>d = Helezonun mil çapı (m):</label>
                <input type="number" id="d3" step="any">
            </div>
        `;
    } else if (subSelection == '2') {
        subFormContainer.innerHTML = `
            <div class="form-group">
                <label>D = Helezonun dış çapı (m):</label>
                <input type="number" id="D4" step="any">
            </div>
            <div class="form-group">
                <label>S = Helezonun Hatvesi (m):</label>
                <input type="number" id="S2" step="any">
            </div>
        `;
    } else if (subSelection == '3') {
        subFormContainer.innerHTML = `
            <div class="form-group">
                <label>d = Helezonun mil çapı (m):</label>
                <input type="number" id="d4" step="any">
            </div>
            <div class="form-group">
                <label>S = Helezonun Hatvesi (m):</label>
                <input type="number" id="S3" step="any">
            </div>
        `;
    } else if (subSelection == '4') {
        subFormContainer.innerHTML = `
            <div class="form-group">
                <label>b = Helezon kanadının genişliği (mm):</label>
                <input type="number" id="b2" step="any">
            </div>
            <div class="form-group">
                <label>A = Helezonun bir kanat açımının dış çevresi:</label>
                <input type="number" id="A2" step="any">
            </div>
            <div class="form-group">
                <label>a = Helezonun bir kanat açımının iç çevresi:</label>
                <input type="number" id="a2" step="any">
            </div>
        `;
    } else if (subSelection == '5') {
        subFormContainer.innerHTML = `
            <div class="form-group">
                <label>r = Helezonun kanat açımının iç radyüsü:</label>
                <input type="number" id="r2" step="any">
            </div>
            <div class="form-group">
                <label>b = Helezon kanadının genişliği (mm):</label>
                <input type="number" id="b3" step="any">
            </div>
        `;
    } else if (subSelection == '6') {
        subFormContainer.innerHTML = `
            <div class="form-group">
                <label>a = Helezonun bir kanat açımının iç çevresi:</label>
                <input type="number" id="a3" step="any">
            </div>
            <div class="form-group">
                <label>r = Helezonun bir kanat açımının dış çevresi:</label>
                <input type="number" id="r3" step="any">
            </div>
        `;
    }
}

function calculate() {
    const selection = document.getElementById('selection').value;
    let result = '';

    if (selection == '1') {
        const A = parseFloat(document.getElementById('A').value);
        const V = parseFloat(document.getElementById('V').value);
        const Delta = parseFloat(document.getElementById('Delta').value);
        const k = parseFloat(document.getElementById('k').value);
        const P = parseFloat(document.getElementById('P').value);
        const D1 = parseFloat(document.getElementById('D1').value);
        const d1 = parseFloat(document.getElementById('d1').value);
        const S = parseFloat(document.getElementById('S').value);
        const N = parseFloat(document.getElementById('N').value);

        result = 60 * Delta * k * P * (Math.PI * (D1**2 - d1**2) / 4) * (S * N);

    } else if (selection == '2') {
        const D2 = parseFloat(document.getElementById('D2').value);
        const L = parseFloat(document.getElementById('L').value);
        const H = parseFloat(document.getElementById('H').value);
        const Q = parseFloat(document.getElementById('Q').value);
        const Mu = parseFloat(document.getElementById('Mu').value);

        result = (Q * ((Mu * L) + H) / 367) + ((D2 * L) / 20);

    } else if (selection == '3') {
        const subSelection = document.getElementById('sub-selection').value;

        if (subSelection == '1') {
            const D3 = parseFloat(document.getElementById('D3').value);
            const d3 = parseFloat(document.getElementById('d3').value);

            result = (D3 - d3) / 2;


        } else if (subSelection == '2') {
            const D4 = parseFloat(document.getElementById('D4').value);
            const S2 = parseFloat(document.getElementById('S2').value);

            result = Math.sqrt(Math.PI**2 * D4**2 + S2**2);

        } else if (subSelection == '3') {
            const d4 = parseFloat(document.getElementById('d4').value);
            const S3 = parseFloat(document.getElementById('S3').value);

            result = Math.sqrt(Math.PI**2 * d4**2 + S3**2);

        } else if (subSelection == '4') {
            const b2 = parseFloat(document.getElementById('b2').value);
            const A2 = parseFloat(document.getElementById('A2').value);
            const a2 = parseFloat(document.getElementById('a2').value);

            result = (b2 * a2) / (A2 - a2);

        } else if (subSelection == '5') {
            const r2 = parseFloat(document.getElementById('r2').value);
            const b3 = parseFloat(document.getElementById('b3').value);

            result = r2 + b3;

        } else if (subSelection == '6') {
            const a3 = parseFloat(document.getElementById('a3').value);
            const r3 = parseFloat(document.getElementById('r3').value);

            result = 360 - ((360 * a3) / (2 * Math.PI * r3));
        }
    } else if (selection == '4') {
        const D4 = parseFloat(document.getElementById('D4').value);
        const d4 = parseFloat(document.getElementById('d4').value);
        const S4 = parseFloat(document.getElementById('S4').value);
        const W = parseFloat(document.getElementById('W').value);
        const N = parseFloat(document.getElementById('N').value);
        const k1 = parseFloat(document.getElementById('k1').value);

        result = (Math.PI * (D4**2 - d4**2) / 4) * S4 * W * N * k1;

    } else if (selection == '5') {
        const D5 = parseFloat(document.getElementById('D5').value);
        const d5 = parseFloat(document.getElementById('d5').value);
        const S5 = parseFloat(document.getElementById('S5').value);
        const Ro = parseFloat(document.getElementById('Ro').value);
        const N = parseFloat(document.getElementById('N').value);
        const W2 = parseFloat(document.getElementById('W2').value);

        result = 60 * W2 * Ro * Math.PI * ((D5**2 - d5**2) / 4) * N * S * 10**6 / 3600;
    }


    document.getElementById('result').innerText = 'Sonuç: ' + result;
}

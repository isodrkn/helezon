document.getElementById('calculate-button').addEventListener('click', calculate);

function showForm() {
    const selection = document.getElementById('selection').value;
    const formContainer = document.getElementById('form-container');
    formContainer.innerHTML = '';

    if (selection == '1') {
        formContainer.innerHTML = `
            <h2>Helezon Konveyör Kapasite Hesabı</h2>
            <div class="form-group">
                <label>D = Helezonun kanadının dış çapı (m):</label>
                <input type="number" id="D_kapasite" step="any">
            </div>
            <div class="form-group">
                <label>d = Helezon milinin çapı (m):</label>
                <input type="number" id="d_kapasite" step="any">
            </div>
            <div class="form-group">
                <label>S = Helezon hatvesi (m):</label>
                <input type="number" id="S_kapasite" step="any">
            </div>
            <div class="form-group">
                <label>N = Helezon devri (devir/dakika):</label>
                <input type="number" id="N_kapasite" step="any">
            </div>
            <div class="form-group">
                <label>Delta = Malzeme aşındırma faktörü:</label>
                <input type="number" id="Delta_kapasite" step="any">
            </div>
            <div class="form-group">
                <label>k = Zemin açısı:</label>
                <input type="number" id="k_kapasite" step="any">
            </div>
            <div class="form-group">
                <label>P = Malzeme yoğunluğu (ton/m³):</label>
                <input type="number" id="P_kapasite" step="any">
            </div>
        `;
    } else if (selection == '2') {
        formContainer.innerHTML = `
            <h2>Helezon Konveyörün Güç Hesabı</h2>
            <div class="form-group">
                <label>D = Helezon çapı (m):</label>
                <input type="number" id="D_guc" step="any">
            </div>
            <div class="form-group">
                <label>L = Helezon boyu (m):</label>
                <input type="number" id="L_guc" step="any">
            </div>
            <div class="form-group">
                <label>H = Kaldırılacak dikey mesafe (m):</label>
                <input type="number" id="H_guc" step="any">
            </div>
            <div class="form-group">
                <label>Q = Helezon kapasitesi (ton/saat):</label>
                <input type="number" id="Q_guc" step="any">
            </div>
            <div class="form-group">
                <label>Mu = Malzeme direnç katsayısı :</label>
                <input type="number" id="Mu_guc" step="any">
            </div>
        `;
    } else if (selection == '3') {
        formContainer.innerHTML = `
            <h2>Helezon Konveyörün Kanat Açım Hesabı</h2>
            <label>Lütfen Bulmak İstediğiniz Birimi Seçin:</label>
            <select id="sub-selection" onchange="showSubForm()">
                <option value="0">Seçiniz</option>
                <option value="1">b = Helezon kanadının genişliği (m)</option>
                <option value="2">A = Helezonun bir kanat açımının dış çevresi (m)</option>
                <option value="3">a = Helezonun bir kanat açımının iç çevresi (m)</option>
                <option value="4">r = Helezonun kanat açımının iç radyüsü (m)</option>
                <option value="5">R = Helezonun kanat açımının dış radyüsü (m)</option>
                <option value="6">Omega = Kanat açınımı kenarları arasındaki açı</option>
            </select>
            <div id="sub-form-container"></div>
        `;
    } else if (selection == '4') {
        formContainer.innerHTML = `
            <h2>Hacimsel İletim Kapasitesi - Iv</h2>
            <div class="form-group">
                <label>D = Helezon çapı (m):</label>
                <input type="number" id="D_hacim" step="any">
            </div>
            <div class="form-group">
                <label>d = Helezon milinin iç çapı (m):</label>
                <input type="number" id="d_hacim" step="any">
            </div>
            <div class="form-group">
                <label>S = Helezon hatvesi (m):</label>
                <input type="number" id="S_hacim" step="any">
            </div>
            <div class="form-group">
                <label>W = Doldurma faktörü:</label>
                <input type="number" id="W_hacim" step="any">
            </div>
            <div class="form-group">
                <label>N = Motor devir hızı (devir/dakika):</label>
                <input type="number" id="N_hacim" step="any">
            </div>
            <div class="form-group">
                <label>k = Eğim faktörü:</label>
                <input type="number" id="k_hacim" step="any">
            </div>
        `;
    } else if (selection == '5') {
        formContainer.innerHTML = `
            <h2>Kütlesel İletim Kapasitesi - Im</h2>
            <div class="form-group">
                <label>D = Helezon çapı (m):</label>
                <input type="number" id="D_kutlesel" step="any">
            </div>
            <div class="form-group">
                <label>d = Helezon milinin iç çapı (m):</label>
                <input type="number" id="d_kutlesel" step="any">
            </div>
            <div class="form-group">
                <label>S = Helezon hatvesi (m):</label>
                <input type="number" id="S_kutlesel" step="any">
            </div>
            <div class="form-group">
                <label>Ro = Yoğunluk:</label>
                <input type="number" id="Ro_kutlesel" step="any">
            </div>
            <div class="form-group">
                <label>N = Motor devir hızı (devir/dakika):</label>
                <input type="number" id="N_kutlesel" step="any">
            </div>
            <div class="form-group">
                <label>W = Doldurma faktörü:</label>
                <input type="number" id="W_kutlesel" step="any">
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
                <input type="number" id="D_b" step="any">
            </div>
            <div class="form-group">
                <label>d = Helezonun mil çapı (m):</label>
                <input type="number" id="d_b" step="any">
            </div>
        `;
    } else if (subSelection == '2') {
        subFormContainer.innerHTML = `
            <div class="form-group">
                <label>D = Helezonun dış çapı (m):</label>
                <input type="number" id="D_A" step="any">
            </div>
            <div class="form-group">
                <label>S = Helezonun Hatvesi (m):</label>
                <input type="number" id="S_A" step="any">
            </div>
        `;
    } else if (subSelection == '3') {
        subFormContainer.innerHTML = `
            <div class="form-group">
                <label>d = Helezonun mil çapı (m):</label>
                <input type="number" id="d_a" step="any">
            </div>
            <div class="form-group">
                <label>S = Helezonun Hatvesi (m):</label>
                <input type="number" id="S_a" step="any">
            </div>
        `;
    } else if (subSelection == '4') {
        subFormContainer.innerHTML = `
            <div class="form-group">
                <label>a : Helezonun bir kanadı açınımının iç çevresi (m):</label>
                <input type="number" id="a_r" step="any">
            </div>
            <div class="form-group">
                <label>b: Helezon kanadının genişliği (m):</label>
                <input type="number" id="b_r" step="any">
            </div>
            <div class="form-group">
                <label>A: Helezonun bir kanadı açınımının dış çevresi (m):</label>
                <input type="number" id="A_r" step="any">
            </div>
        `;
    } else if (subSelection == '5') {
        subFormContainer.innerHTML = `
            <div class="form-group">
                <label>b: Helezon kanadının genişliği (m):</label>
                <input type="number" id="b_R" step="any">
            </div>
            <div class="form-group">
                <label>r: Kanat açınımı iç radyüsü (m):</label>
                <input type="number" id="r_R" step="any">
            </div>
        `;
    } else if (subSelection == '6') {
        subFormContainer.innerHTML = `
            <div class="form-group">
                <label>A = Helezonun bir kanadı açınımının dış çevresi (m):</label>
                <input type="number" id="A_omega" step="any">
            </div>
            <div class="form-group">
                <label>R = Helezonun bir kanadı açınımının dış radyüsü (m):</label>
                <input type="number" id="R_omega" step="any">
            </div>
        `;
    }
}

function calculate() {
    const selection = document.getElementById('selection').value;
    let result;

    if (selection == '1') {
        const D_kapasite = parseFloat(document.getElementById('D_kapasite').value);
        const d_kapasite = parseFloat(document.getElementById('d_kapasite').value);
        const S_kapasite = parseFloat(document.getElementById('S_kapasite').value);
        const N_kapasite = parseFloat(document.getElementById('N_kapasite').value);
        const Delta_kapasite = parseFloat(document.getElementById('Delta_kapasite').value);
        const k_kapasite = parseFloat(document.getElementById('k_kapasite').value);
        const P_kapasite = parseFloat(document.getElementById('P_kapasite').value);

        result = S_kapasite * k_kapasite * P_kapasite * Delta_kapasite * N_kapasite * (Math.PI*(D_kapasite**2 - d_kapasite**2)/4) * 60;
        document.getElementById('result').textContent = result.toFixed(9) + ' ton/saat';
    } else if (selection == '2') {
        const D_guc = parseFloat(document.getElementById('D_guc').value);
        const L_guc = parseFloat(document.getElementById('L_guc').value);
        const H_guc = parseFloat(document.getElementById('H_guc').value);
        const Q_guc = parseFloat(document.getElementById('Q_guc').value);
        const Mu_guc = parseFloat(document.getElementById('Mu_guc').value);

        result = ((100*Q_guc * ((Mu_guc * L_guc)+ H_guc))/367) + (D_guc * L_guc)/20;
        document.getElementById('result').textContent = result.toFixed(9) + ' kW';
    } else if (selection == '3') {
        const subSelection = document.getElementById('sub-selection').value;

        if (subSelection == '1') {
            const D_b = parseFloat(document.getElementById('D_b').value);
            const d_b = parseFloat(document.getElementById('d_b').value);

            result = (D_b - d_b)/2;
            document.getElementById('result').textContent = result.toFixed(9) + ' m';
        } else if (subSelection == '2') {
            const D_A = parseFloat(document.getElementById('D_A').value);
            const S_A = parseFloat(document.getElementById('S_A').value);

            result = (Math.PI**2 * D_A**2 + S_A**2)**(0.5);
            document.getElementById('result').textContent = result.toFixed(9) + ' m';
        } else if (subSelection == '3') {
            const d_a = parseFloat(document.getElementById('d_a').value);
            const S_a = parseFloat(document.getElementById('S_a').value);

            result = (Math.PI**2 * d_a**2 + S_a**2)**(0.5);
            document.getElementById('result').textContent = result.toFixed(9) + ' m';
        } else if (subSelection == '4') {
            const a_r = parseFloat(document.getElementById('a_r').value);
            const b_r = parseFloat(document.getElementById('b_r').value);
            const A_r = parseFloat(document.getElementById('A_r').value);

            result = (b_r * a_r)/(A_r - a_r);
            document.getElementById('result').textContent = result.toFixed(9) + ' m';
        } else if (subSelection == '5') {
            const b_R = parseFloat(document.getElementById('b_R').value);
            const r_R = parseFloat(document.getElementById('r_R').value);
            result = r_R - b_R;
            document.getElementById('result').textContent = result.toFixed(9) + ' m';
        } else if (subSelection == '6') {
            const A_omega = parseFloat(document.getElementById('A_omega').value);
            const R_omega = parseFloat(document.getElementById('R_omega').value);

            result = (360 - ((360*A_omega)/(2 * Math.PI * R_omega)));
            document.getElementById('result').textContent = result.toFixed(9) + ' rad';
        }
    } else if (selection == '4') {
        const D_hacim = parseFloat(document.getElementById('D_hacim').value);
        const d_hacim = parseFloat(document.getElementById('d_hacim').value);
        const S_hacim = parseFloat(document.getElementById('S_hacim').value);
        const W_hacim = parseFloat(document.getElementById('W_hacim').value);
        const N_hacim = parseFloat(document.getElementById('N_hacim').value);
        const k_hacim = parseFloat(document.getElementById('k_hacim').value);

        result = ((Math.PI * (D_hacim ** 2 - d_hacim ** 2)) / 4) * S_hacim * W_hacim * N_hacim * k_hacim/60;
        document.getElementById('result').textContent = result.toFixed(9) + ' m³/s';
    } else if (selection == '5') {
        const D_kutlesel = parseFloat(document.getElementById('D_kutlesel').value);
        const d_kutlesel = parseFloat(document.getElementById('d_kutlesel').value);
        const S_kutlesel = parseFloat(document.getElementById('S_kutlesel').value);
        const Ro_kutlesel = parseFloat(document.getElementById('Ro_kutlesel').value);
        const N_kutlesel = parseFloat(document.getElementById('N_kutlesel').value);
        const W_kutlesel = parseFloat(document.getElementById('W_kutlesel').value);

        result = 60*W_kutlesel*Ro_kutlesel*(Math.PI*((D_kutlesel**2-d_kutlesel**2)/4))*N_kutlesel*S_kutlesel*10**6/3600
        document.getElementById('result').textContent = result.toFixed(9) + ' gr/s';
    }
}

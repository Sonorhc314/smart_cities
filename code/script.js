let code_block = document.querySelector("#code_block");
let code_link = document.querySelector("#code");
code_link.addEventListener("click", function (event) {
  code_block.innerHTML = `
			<div class="container", style="margin-top:100px;">
				<div class="row">
                    <div class="col-sm-7 d-none d-sm-block">
						<h2>Weather API</h2></br>
						<p>Remember to tab on and off before leaving!
						</br></br><a href="https://unique-hamster-ccb302.netlify.app/" class="btn btn-primary btn-lg">Open QR code</a>
						</p>
					</div>
					<div class="col-sm-5">
						<img src="style/QRcode.png" class="img-fluid p-2 shadow rounded d-none d-sm-block"/>
					</div>
				</div>
			</div>`;
});

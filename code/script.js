let code_block = document.querySelector("#code_block");
let code_link = document.querySelector("#code");
code_link.addEventListener("click", function (event) {
  code_block.innerHTML = `
			<div class="container", style="margin-top:100px;">
				<div class="row">
                    <div class="col-sm-7 d-none d-sm-block">
						<h2>Weather API</h2></br>
						<p>Remember to tap on and off before leaving!
						</br></br><button type="button" class="btn btn-primary btn-lg"
                        data-toggle="modal"
                        data-target="#exampleModal">Open QR code</button>
                        <div class="modal fade"
                            id="exampleModal"
                            tabindex="-1"
                            role="dialog"
                            aria-labelledby="exampleModalLabel"
                            aria-hidden="true">
                            
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                
                                    <!-- Add image inside the body of modal -->
                                    <div class="modal-body">
                                        <img id="image" src=
                                    "style/QRcode.png"
                                            alt="Click on button" 
                                        style="width:100%;"/>
                                    </div>
                    
                                    <div class="modal-footer">
                                        <button type="button"
                                            class="btn btn-secondary"
                                            data-dismiss="modal">
                                            Close
                                    </button>
                                    </div>
                                </div>
                            </div>
                        </div>
						</p>
					</div>
					<div class="col-sm-5">
						<img src="style/QRcode.png" class="img-fluid p-2 shadow rounded d-none d-sm-block"/>
					</div>
				</div>
			</div>`;
});

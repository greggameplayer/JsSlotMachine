﻿var credit = 50;
var bet = 5;
var slot1;
var slot2;
var slot3;
var loop1;
var loop2;
var loop3;
function Spin()
{
	if(credit < bet){
		window.alert("Vous n'avez pas assez de crédit !");
	}
	if(credit >= bet){
		credit = credit - bet;
		document.getElementById("credit").innerHTML = "Crédit: " + credit;
		slot1 = Math.floor((Math.random() * 5) + 1);
		slot2 = Math.floor((Math.random() * 5) + 1);
		slot3 = Math.floor((Math.random() * 5) + 1);
		loop1 = Math.floor((Math.random() * 3) + 1);
		loop2 = Math.floor((Math.random() * 3) + 1);
		loop3 = Math.floor((Math.random() * 3) + 1);
		ClearCanvas('canvasslot1');
        ClearCanvas('canvasslot2');
        ClearCanvas('canvasslot3');		
		if(slot1 == 1){ 
					drawImages('canvasslot1', "images/lucky-seven.png", -25);
			setTimeout(function(){
            drawImages('canvasslot1', "images/lucky-seven.png", -20);
				setTimeout(function(){
					drawImages('canvasslot1', "images/lucky-seven.png", -15);
					setTimeout(function(){
						drawImages('canvasslot1', "images/lucky-seven.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot1', "images/lucky-seven.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot1', "images/lucky-seven.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot1', "images/lucky-seven.png", 5);
									setTimeout(function(){
										drawImages('canvasslot1', "images/lucky-seven.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot1', "images/lucky-seven.png", 15);
											setTimeout(function(){
												drawImages('canvasslot1', "images/lucky-seven.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot1', "images/lucky-seven.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot1', "images/lucky-seven.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot1', "images/lucky-seven.png", 35);
															setTimeout(function(){
																drawImages('canvasslot1', "images/lucky-seven.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot1', "images/lucky-seven.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot1', "images/lucky-seven.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot1', "images/lucky-seven.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot1', "images/lucky-seven.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot1', "images/lucky-seven.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot1', "images/lucky-seven.png", 70);
			drawImages('canvasslot1', "images/Slot_Grapes.png", -25);
			setTimeout(function(){
            drawImages('canvasslot1', "images/Slot_Grapes.png", -20);
				setTimeout(function(){
					drawImages('canvasslot1', "images/Slot_Grapes.png", -15);
					setTimeout(function(){
						drawImages('canvasslot1', "images/Slot_Grapes.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot1', "images/Slot_Grapes.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot1', "images/Slot_Grapes.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot1', "images/Slot_Grapes.png", 5);
									setTimeout(function(){
										drawImages('canvasslot1', "images/Slot_Grapes.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot1', "images/Slot_Grapes.png", 15);
											setTimeout(function(){
												drawImages('canvasslot1', "images/Slot_Grapes.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot1', "images/Slot_Grapes.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot1', "images/Slot_Grapes.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot1', "images/Slot_Grapes.png", 35);
															setTimeout(function(){
																drawImages('canvasslot1', "images/Slot_Grapes.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot1', "images/Slot_Grapes.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot1', "images/Slot_Grapes.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot1', "images/Slot_Grapes.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot1', "images/Slot_Grapes.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot1', "images/Slot_Grapes.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot1', "images/Slot_Grapes.png", 70);
			drawImages('canvasslot1', "images/clover.png", -25);
			setTimeout(function(){
            drawImages('canvasslot1', "images/clover.png", -20);
				setTimeout(function(){
					drawImages('canvasslot1', "images/clover.png", -15);
					setTimeout(function(){
						drawImages('canvasslot1', "images/clover.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot1', "images/clover.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot1', "images/clover.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot1', "images/clover.png", 5);
									setTimeout(function(){
										drawImages('canvasslot1', "images/clover.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot1', "images/clover.png", 15);
											setTimeout(function(){
												drawImages('canvasslot1', "images/clover.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot1', "images/clover.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot1', "images/clover.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot1', "images/clover.png", 35);
															setTimeout(function(){
																drawImages('canvasslot1', "images/clover.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot1', "images/clover.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot1', "images/clover.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot1', "images/clover.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot1', "images/clover.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot1', "images/clover.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot1', "images/clover.png", 70);
			drawImages('canvasslot1', "images/bells-32.png", -25);
			setTimeout(function(){
            drawImages('canvasslot1', "images/bells-32.png", -20);
				setTimeout(function(){
					drawImages('canvasslot1', "images/bells-32.png", -15);
					setTimeout(function(){
						drawImages('canvasslot1', "images/bells-32.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot1', "images/bells-32.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot1', "images/bells-32.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot1', "images/bells-32.png", 5);
									setTimeout(function(){
										drawImages('canvasslot1', "images/bells-32.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot1', "images/bells-32.png", 15);
											setTimeout(function(){
												drawImages('canvasslot1', "images/bells-32.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot1', "images/bells-32.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot1', "images/bells-32.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot1', "images/bells-32.png", 35);
															setTimeout(function(){
																drawImages('canvasslot1', "images/bells-32.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot1', "images/bells-32.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot1', "images/bells-32.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot1', "images/bells-32.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot1', "images/bells-32.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot1', "images/bells-32.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot1', "images/bells-32.png", 70);
				drawImages('canvasslot1', "images/cherry.png", -25);
			setTimeout(function(){
            drawImages('canvasslot1', "images/cherry.png", -20);
				setTimeout(function(){
					drawImages('canvasslot1', "images/cherry.png", -15);
					setTimeout(function(){
						drawImages('canvasslot1', "images/cherry.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot1', "images/cherry.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot1', "images/cherry.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot1', "images/cherry.png", 5);
									setTimeout(function(){
										drawImages('canvasslot1', "images/cherry.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot1', "images/cherry.png", 15);
											setTimeout(function(){
												drawImages('canvasslot1', "images/cherry.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot1', "images/cherry.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot1', "images/cherry.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot1', "images/cherry.png", 35);
															setTimeout(function(){
																drawImages('canvasslot1', "images/cherry.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot1', "images/cherry.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot1', "images/cherry.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot1', "images/cherry.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot1', "images/cherry.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot1', "images/cherry.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot1', "images/cherry.png", 70);
			
			drawImages('canvasslot1', "images/lucky-seven.png", -25);
			setTimeout(function(){
            drawImages('canvasslot1', "images/lucky-seven.png", -20);
				setTimeout(function(){
					drawImages('canvasslot1', "images/lucky-seven.png", -15);
					setTimeout(function(){
						drawImages('canvasslot1', "images/lucky-seven.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot1', "images/lucky-seven.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot1', "images/lucky-seven.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot1', "images/lucky-seven.png", 5);
									setTimeout(function(){
										drawImages('canvasslot1', "images/lucky-seven.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot1', "images/lucky-seven.png", 15);
											setTimeout(function(){
												drawImages('canvasslot1', "images/lucky-seven.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot1', "images/lucky-seven.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot1', "images/lucky-seven.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot1', "images/lucky-seven.png", 35);
                                                            														
		if(slot2 == 1){
					drawImages('canvasslot2', "images/lucky-seven.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/lucky-seven.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/lucky-seven.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/lucky-seven.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/lucky-seven.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/lucky-seven.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/lucky-seven.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/lucky-seven.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/lucky-seven.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/lucky-seven.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/lucky-seven.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/lucky-seven.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/lucky-seven.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/lucky-seven.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/lucky-seven.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/lucky-seven.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/lucky-seven.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/lucky-seven.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/lucky-seven.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/lucky-seven.png", 70);
			drawImages('canvasslot2', "images/Slot_Grapes.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/Slot_Grapes.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/Slot_Grapes.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/Slot_Grapes.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/Slot_Grapes.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/Slot_Grapes.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/Slot_Grapes.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/Slot_Grapes.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/Slot_Grapes.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/Slot_Grapes.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/Slot_Grapes.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/Slot_Grapes.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/Slot_Grapes.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/Slot_Grapes.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/Slot_Grapes.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/Slot_Grapes.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/Slot_Grapes.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/Slot_Grapes.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/Slot_Grapes.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/Slot_Grapes.png", 70);
			drawImages('canvasslot2', "images/clover.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/clover.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/clover.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/clover.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/clover.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/clover.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/clover.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/clover.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/clover.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/clover.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/clover.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/clover.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/clover.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/clover.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/clover.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/clover.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/clover.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/clover.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/clover.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/clover.png", 70);
																						
			drawImages('canvasslot2', "images/bells-32.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/bells-32.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/bells-32.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/bells-32.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/bells-32.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/bells-32.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/bells-32.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/bells-32.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/bells-32.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/bells-32.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/bells-32.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/bells-32.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/bells-32.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/bells-32.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/bells-32.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/bells-32.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/bells-32.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/bells-32.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/bells-32.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/bells-32.png", 70);
				drawImages('canvasslot2', "images/cherry.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/cherry.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/cherry.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/cherry.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/cherry.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/cherry.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/cherry.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/cherry.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/cherry.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/cherry.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/cherry.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/cherry.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/cherry.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/cherry.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/cherry.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/cherry.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/cherry.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/cherry.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/cherry.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/cherry.png", 70);
			
			drawImages('canvasslot2', "images/lucky-seven.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/lucky-seven.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/lucky-seven.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/lucky-seven.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/lucky-seven.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/lucky-seven.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/lucky-seven.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/lucky-seven.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/lucky-seven.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/lucky-seven.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/lucky-seven.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/lucky-seven.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/lucky-seven.png", 35);	
		if(slot3 == 1){ //---
			SpinAllImages3(loop3);
			drawImages('canvasslot3', "images/lucky-seven.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/lucky-seven.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/lucky-seven.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/lucky-seven.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/lucky-seven.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/lucky-seven.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/lucky-seven.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/lucky-seven.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/lucky-seven.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/lucky-seven.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/lucky-seven.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/lucky-seven.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/lucky-seven.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);	
		} else if( slot3 == 2){
			SpinAllImages3(loop3);
			drawImages('canvasslot3', "images/Slot_Grapes.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/Slot_Grapes.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/Slot_Grapes.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/Slot_Grapes.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/Slot_Grapes.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/Slot_Grapes.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/Slot_Grapes.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/Slot_Grapes.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/Slot_Grapes.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/Slot_Grapes.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/Slot_Grapes.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/Slot_Grapes.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/Slot_Grapes.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);				
		} else if(slot3 == 3){
			SpinAllImages3(loop3);
			drawImages('canvasslot3', "images/clover.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/clover.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/clover.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/clover.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/clover.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/clover.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/clover.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/clover.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/clover.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/clover.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/clover.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/clover.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/clover.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);					
		}else if(slot3 == 4){
			SpinAllImages3(loop3);
			drawImages('canvasslot3', "images/bells-32.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/bells-32.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/bells-32.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/bells-32.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/bells-32.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/bells-32.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/bells-32.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/bells-32.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/bells-32.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/bells-32.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/bells-32.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/bells-32.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/bells-32.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);				
		}else if(slot3 == 5){
			SpinAllImages3(loop3);
			drawImages('canvasslot3', "images/cherry.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/cherry.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/cherry.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/cherry.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/cherry.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/cherry.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/cherry.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/cherry.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/cherry.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/cherry.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/cherry.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/cherry.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/cherry.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);					
		}
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																						
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																										
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																										
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																										
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);			
		} else if( slot2 == 2){
					drawImages('canvasslot2', "images/lucky-seven.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/lucky-seven.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/lucky-seven.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/lucky-seven.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/lucky-seven.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/lucky-seven.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/lucky-seven.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/lucky-seven.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/lucky-seven.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/lucky-seven.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/lucky-seven.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/lucky-seven.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/lucky-seven.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/lucky-seven.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/lucky-seven.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/lucky-seven.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/lucky-seven.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/lucky-seven.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/lucky-seven.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/lucky-seven.png", 70);
			drawImages('canvasslot2', "images/Slot_Grapes.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/Slot_Grapes.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/Slot_Grapes.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/Slot_Grapes.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/Slot_Grapes.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/Slot_Grapes.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/Slot_Grapes.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/Slot_Grapes.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/Slot_Grapes.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/Slot_Grapes.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/Slot_Grapes.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/Slot_Grapes.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/Slot_Grapes.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/Slot_Grapes.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/Slot_Grapes.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/Slot_Grapes.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/Slot_Grapes.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/Slot_Grapes.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/Slot_Grapes.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/Slot_Grapes.png", 70);
			drawImages('canvasslot2', "images/clover.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/clover.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/clover.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/clover.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/clover.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/clover.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/clover.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/clover.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/clover.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/clover.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/clover.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/clover.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/clover.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/clover.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/clover.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/clover.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/clover.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/clover.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/clover.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/clover.png", 70);
																						
			drawImages('canvasslot2', "images/bells-32.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/bells-32.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/bells-32.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/bells-32.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/bells-32.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/bells-32.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/bells-32.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/bells-32.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/bells-32.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/bells-32.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/bells-32.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/bells-32.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/bells-32.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/bells-32.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/bells-32.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/bells-32.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/bells-32.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/bells-32.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/bells-32.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/bells-32.png", 70);
				drawImages('canvasslot2', "images/cherry.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/cherry.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/cherry.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/cherry.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/cherry.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/cherry.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/cherry.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/cherry.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/cherry.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/cherry.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/cherry.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/cherry.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/cherry.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/cherry.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/cherry.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/cherry.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/cherry.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/cherry.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/cherry.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/cherry.png", 70);
			
			drawImages('canvasslot2', "images/Slot_Grapes.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/Slot_Grapes.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/Slot_Grapes.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/Slot_Grapes.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/Slot_Grapes.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/Slot_Grapes.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/Slot_Grapes.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/Slot_Grapes.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/Slot_Grapes.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/Slot_Grapes.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/Slot_Grapes.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/Slot_Grapes.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/Slot_Grapes.png", 35);	
		 if(slot3 == 1){
			SpinAllImages3(loop3);
			drawImages('canvasslot3', "images/lucky-seven.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/lucky-seven.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/lucky-seven.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/lucky-seven.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/lucky-seven.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/lucky-seven.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/lucky-seven.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/lucky-seven.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/lucky-seven.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/lucky-seven.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/lucky-seven.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/lucky-seven.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/lucky-seven.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);	
		} else if( slot3 == 2){
			SpinAllImages3(loop3);
			drawImages('canvasslot3', "images/Slot_Grapes.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/Slot_Grapes.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/Slot_Grapes.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/Slot_Grapes.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/Slot_Grapes.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/Slot_Grapes.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/Slot_Grapes.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/Slot_Grapes.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/Slot_Grapes.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/Slot_Grapes.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/Slot_Grapes.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/Slot_Grapes.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/Slot_Grapes.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);				
		} else if(slot3 == 3){
			SpinAllImages3(loop3);
			drawImages('canvasslot3', "images/clover.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/clover.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/clover.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/clover.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/clover.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/clover.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/clover.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/clover.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/clover.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/clover.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/clover.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/clover.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/clover.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);					
		}else if(slot3 == 4){
			SpinAllImages3(loop3);
			drawImages('canvasslot3', "images/bells-32.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/bells-32.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/bells-32.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/bells-32.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/bells-32.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/bells-32.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/bells-32.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/bells-32.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/bells-32.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/bells-32.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/bells-32.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/bells-32.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/bells-32.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);				
		}else if(slot3 == 5){
			SpinAllImages3(loop3);
			drawImages('canvasslot3', "images/cherry.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/cherry.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/cherry.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/cherry.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/cherry.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/cherry.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/cherry.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/cherry.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/cherry.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/cherry.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/cherry.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/cherry.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/cherry.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);					
		}
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																						
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																										
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																										
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																										
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);				
		} else if(slot2 == 3){
					drawImages('canvasslot2', "images/lucky-seven.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/lucky-seven.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/lucky-seven.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/lucky-seven.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/lucky-seven.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/lucky-seven.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/lucky-seven.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/lucky-seven.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/lucky-seven.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/lucky-seven.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/lucky-seven.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/lucky-seven.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/lucky-seven.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/lucky-seven.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/lucky-seven.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/lucky-seven.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/lucky-seven.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/lucky-seven.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/lucky-seven.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/lucky-seven.png", 70);
			drawImages('canvasslot2', "images/Slot_Grapes.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/Slot_Grapes.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/Slot_Grapes.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/Slot_Grapes.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/Slot_Grapes.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/Slot_Grapes.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/Slot_Grapes.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/Slot_Grapes.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/Slot_Grapes.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/Slot_Grapes.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/Slot_Grapes.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/Slot_Grapes.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/Slot_Grapes.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/Slot_Grapes.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/Slot_Grapes.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/Slot_Grapes.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/Slot_Grapes.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/Slot_Grapes.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/Slot_Grapes.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/Slot_Grapes.png", 70);
			drawImages('canvasslot2', "images/clover.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/clover.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/clover.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/clover.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/clover.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/clover.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/clover.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/clover.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/clover.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/clover.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/clover.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/clover.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/clover.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/clover.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/clover.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/clover.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/clover.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/clover.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/clover.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/clover.png", 70);
																						
			drawImages('canvasslot2', "images/bells-32.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/bells-32.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/bells-32.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/bells-32.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/bells-32.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/bells-32.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/bells-32.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/bells-32.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/bells-32.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/bells-32.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/bells-32.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/bells-32.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/bells-32.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/bells-32.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/bells-32.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/bells-32.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/bells-32.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/bells-32.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/bells-32.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/bells-32.png", 70);
				drawImages('canvasslot2', "images/cherry.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/cherry.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/cherry.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/cherry.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/cherry.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/cherry.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/cherry.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/cherry.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/cherry.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/cherry.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/cherry.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/cherry.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/cherry.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/cherry.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/cherry.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/cherry.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/cherry.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/cherry.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/cherry.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/cherry.png", 70);
			
			drawImages('canvasslot2', "images/clover.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/clover.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/clover.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/clover.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/clover.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/clover.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/clover.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/clover.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/clover.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/clover.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/clover.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/clover.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/clover.png", 35);		
		 if(slot3 == 1){
			SpinAllImages3(loop3);
			drawImages('canvasslot3', "images/lucky-seven.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/lucky-seven.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/lucky-seven.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/lucky-seven.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/lucky-seven.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/lucky-seven.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/lucky-seven.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/lucky-seven.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/lucky-seven.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/lucky-seven.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/lucky-seven.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/lucky-seven.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/lucky-seven.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);	
		} else if( slot3 == 2){
			SpinAllImages3(loop3);
			drawImages('canvasslot3', "images/Slot_Grapes.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/Slot_Grapes.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/Slot_Grapes.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/Slot_Grapes.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/Slot_Grapes.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/Slot_Grapes.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/Slot_Grapes.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/Slot_Grapes.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/Slot_Grapes.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/Slot_Grapes.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/Slot_Grapes.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/Slot_Grapes.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/Slot_Grapes.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);				
		} else if(slot3 == 3){
			SpinAllImages3(loop3);
			drawImages('canvasslot3', "images/clover.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/clover.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/clover.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/clover.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/clover.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/clover.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/clover.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/clover.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/clover.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/clover.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/clover.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/clover.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/clover.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);					
		}else if(slot3 == 4){
			SpinAllImages3(loop3);
			drawImages('canvasslot3', "images/bells-32.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/bells-32.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/bells-32.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/bells-32.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/bells-32.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/bells-32.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/bells-32.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/bells-32.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/bells-32.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/bells-32.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/bells-32.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/bells-32.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/bells-32.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);				
		}else if(slot3 == 5){
			SpinAllImages3(loop3);
			drawImages('canvasslot3', "images/cherry.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/cherry.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/cherry.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/cherry.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/cherry.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/cherry.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/cherry.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/cherry.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/cherry.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/cherry.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/cherry.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/cherry.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/cherry.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);					
		}
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																						
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																										
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																										
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																										
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);						
		}else if(slot2 == 4){
					drawImages('canvasslot2', "images/lucky-seven.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/lucky-seven.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/lucky-seven.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/lucky-seven.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/lucky-seven.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/lucky-seven.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/lucky-seven.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/lucky-seven.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/lucky-seven.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/lucky-seven.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/lucky-seven.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/lucky-seven.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/lucky-seven.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/lucky-seven.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/lucky-seven.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/lucky-seven.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/lucky-seven.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/lucky-seven.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/lucky-seven.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/lucky-seven.png", 70);
			drawImages('canvasslot2', "images/Slot_Grapes.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/Slot_Grapes.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/Slot_Grapes.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/Slot_Grapes.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/Slot_Grapes.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/Slot_Grapes.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/Slot_Grapes.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/Slot_Grapes.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/Slot_Grapes.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/Slot_Grapes.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/Slot_Grapes.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/Slot_Grapes.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/Slot_Grapes.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/Slot_Grapes.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/Slot_Grapes.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/Slot_Grapes.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/Slot_Grapes.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/Slot_Grapes.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/Slot_Grapes.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/Slot_Grapes.png", 70);
			drawImages('canvasslot2', "images/clover.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/clover.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/clover.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/clover.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/clover.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/clover.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/clover.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/clover.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/clover.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/clover.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/clover.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/clover.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/clover.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/clover.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/clover.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/clover.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/clover.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/clover.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/clover.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/clover.png", 70);
																						
			drawImages('canvasslot2', "images/bells-32.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/bells-32.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/bells-32.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/bells-32.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/bells-32.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/bells-32.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/bells-32.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/bells-32.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/bells-32.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/bells-32.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/bells-32.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/bells-32.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/bells-32.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/bells-32.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/bells-32.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/bells-32.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/bells-32.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/bells-32.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/bells-32.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/bells-32.png", 70);
				drawImages('canvasslot2', "images/cherry.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/cherry.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/cherry.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/cherry.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/cherry.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/cherry.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/cherry.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/cherry.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/cherry.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/cherry.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/cherry.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/cherry.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/cherry.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/cherry.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/cherry.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/cherry.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/cherry.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/cherry.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/cherry.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/cherry.png", 70);
																						
			drawImages('canvasslot2', "images/bells-32.png",-25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/bells-32.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/bells-32.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/bells-32.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/bells-32.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/bells-32.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/bells-32.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/bells-32.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/bells-32.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/bells-32.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/bells-32.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/bells-32.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/bells-32.png", 35);
		 if(slot3 == 1){
			SpinAllImages3(loop3);
			drawImages('canvasslot3', "images/lucky-seven.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/lucky-seven.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/lucky-seven.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/lucky-seven.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/lucky-seven.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/lucky-seven.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/lucky-seven.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/lucky-seven.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/lucky-seven.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/lucky-seven.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/lucky-seven.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/lucky-seven.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/lucky-seven.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);	
		} else if( slot3 == 2){
			SpinAllImages3(loop3);
			drawImages('canvasslot3', "images/Slot_Grapes.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/Slot_Grapes.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/Slot_Grapes.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/Slot_Grapes.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/Slot_Grapes.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/Slot_Grapes.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/Slot_Grapes.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/Slot_Grapes.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/Slot_Grapes.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/Slot_Grapes.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/Slot_Grapes.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/Slot_Grapes.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/Slot_Grapes.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);				
		} else if(slot3 == 3){
			SpinAllImages3(loop3);
			drawImages('canvasslot3', "images/clover.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/clover.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/clover.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/clover.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/clover.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/clover.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/clover.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/clover.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/clover.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/clover.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/clover.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/clover.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/clover.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);					
		}else if(slot3 == 4){
			SpinAllImages3(loop3);
			drawImages('canvasslot3', "images/bells-32.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/bells-32.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/bells-32.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/bells-32.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/bells-32.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/bells-32.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/bells-32.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/bells-32.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/bells-32.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/bells-32.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/bells-32.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/bells-32.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/bells-32.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);				
		}else if(slot3 == 5){
			SpinAllImages3(loop3);
			drawImages('canvasslot3', "images/cherry.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/cherry.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/cherry.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/cherry.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/cherry.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/cherry.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/cherry.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/cherry.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/cherry.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/cherry.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/cherry.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/cherry.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/cherry.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);					
		}
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																						
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																										
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																										
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																										
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);				
		}else if(slot2 == 5){
					drawImages('canvasslot2', "images/lucky-seven.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/lucky-seven.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/lucky-seven.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/lucky-seven.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/lucky-seven.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/lucky-seven.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/lucky-seven.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/lucky-seven.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/lucky-seven.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/lucky-seven.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/lucky-seven.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/lucky-seven.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/lucky-seven.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/lucky-seven.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/lucky-seven.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/lucky-seven.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/lucky-seven.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/lucky-seven.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/lucky-seven.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/lucky-seven.png", 70);
			drawImages('canvasslot2', "images/Slot_Grapes.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/Slot_Grapes.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/Slot_Grapes.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/Slot_Grapes.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/Slot_Grapes.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/Slot_Grapes.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/Slot_Grapes.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/Slot_Grapes.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/Slot_Grapes.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/Slot_Grapes.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/Slot_Grapes.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/Slot_Grapes.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/Slot_Grapes.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/Slot_Grapes.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/Slot_Grapes.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/Slot_Grapes.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/Slot_Grapes.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/Slot_Grapes.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/Slot_Grapes.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/Slot_Grapes.png", 70);
			drawImages('canvasslot2', "images/clover.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/clover.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/clover.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/clover.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/clover.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/clover.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/clover.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/clover.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/clover.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/clover.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/clover.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/clover.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/clover.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/clover.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/clover.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/clover.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/clover.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/clover.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/clover.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/clover.png", 70);
																						
			drawImages('canvasslot2', "images/bells-32.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/bells-32.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/bells-32.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/bells-32.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/bells-32.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/bells-32.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/bells-32.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/bells-32.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/bells-32.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/bells-32.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/bells-32.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/bells-32.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/bells-32.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/bells-32.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/bells-32.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/bells-32.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/bells-32.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/bells-32.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/bells-32.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/bells-32.png", 70);
				drawImages('canvasslot2', "images/cherry.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/cherry.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/cherry.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/cherry.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/cherry.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/cherry.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/cherry.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/cherry.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/cherry.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/cherry.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/cherry.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/cherry.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/cherry.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/cherry.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/cherry.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/cherry.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/cherry.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/cherry.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/cherry.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/cherry.png", 70);
			
			drawImages('canvasslot2', "images/cherry.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/cherry.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/cherry.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/cherry.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/cherry.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/cherry.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/cherry.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/cherry.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/cherry.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/cherry.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/cherry.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/cherry.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/cherry.png", 35);	
		 if(slot3 == 1){
			 SpinAllImages3(loop3);
			drawImages('canvasslot3', "images/lucky-seven.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/lucky-seven.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/lucky-seven.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/lucky-seven.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/lucky-seven.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/lucky-seven.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/lucky-seven.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/lucky-seven.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/lucky-seven.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/lucky-seven.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/lucky-seven.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/lucky-seven.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/lucky-seven.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);	
		} else if( slot3 == 2){
			SpinAllImages3(loop3);
			drawImages('canvasslot3', "images/Slot_Grapes.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/Slot_Grapes.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/Slot_Grapes.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/Slot_Grapes.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/Slot_Grapes.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/Slot_Grapes.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/Slot_Grapes.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/Slot_Grapes.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/Slot_Grapes.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/Slot_Grapes.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/Slot_Grapes.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/Slot_Grapes.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/Slot_Grapes.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);				
		} else if(slot3 == 3){
			SpinAllImages3(loop3);
			drawImages('canvasslot3', "images/clover.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/clover.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/clover.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/clover.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/clover.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/clover.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/clover.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/clover.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/clover.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/clover.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/clover.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/clover.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/clover.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);					
		}else if(slot3 == 4){
			SpinAllImages3(loop3);
			drawImages('canvasslot3', "images/bells-32.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/bells-32.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/bells-32.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/bells-32.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/bells-32.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/bells-32.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/bells-32.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/bells-32.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/bells-32.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/bells-32.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/bells-32.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/bells-32.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/bells-32.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);				
		}else if(slot3 == 5){
			SpinAllImages3(loop3);
			drawImages('canvasslot3', "images/cherry.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/cherry.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/cherry.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/cherry.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/cherry.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/cherry.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/cherry.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/cherry.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/cherry.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/cherry.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/cherry.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/cherry.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/cherry.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);					
		}
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																						
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																										
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																										
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																										
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);					
		}
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																						
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																										
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																										
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																										
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);		
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);
		} else if( slot1 == 2){ 
					drawImages('canvasslot1', "images/lucky-seven.png", -25);
			setTimeout(function(){
            drawImages('canvasslot1', "images/lucky-seven.png", -20);
				setTimeout(function(){
					drawImages('canvasslot1', "images/lucky-seven.png", -15);
					setTimeout(function(){
						drawImages('canvasslot1', "images/lucky-seven.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot1', "images/lucky-seven.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot1', "images/lucky-seven.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot1', "images/lucky-seven.png", 5);
									setTimeout(function(){
										drawImages('canvasslot1', "images/lucky-seven.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot1', "images/lucky-seven.png", 15);
											setTimeout(function(){
												drawImages('canvasslot1', "images/lucky-seven.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot1', "images/lucky-seven.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot1', "images/lucky-seven.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot1', "images/lucky-seven.png", 35);
															setTimeout(function(){
																drawImages('canvasslot1', "images/lucky-seven.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot1', "images/lucky-seven.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot1', "images/lucky-seven.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot1', "images/lucky-seven.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot1', "images/lucky-seven.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot1', "images/lucky-seven.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot1', "images/lucky-seven.png", 70);
			drawImages('canvasslot1', "images/Slot_Grapes.png", -25);
			setTimeout(function(){
            drawImages('canvasslot1', "images/Slot_Grapes.png", -20);
				setTimeout(function(){
					drawImages('canvasslot1', "images/Slot_Grapes.png", -15);
					setTimeout(function(){
						drawImages('canvasslot1', "images/Slot_Grapes.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot1', "images/Slot_Grapes.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot1', "images/Slot_Grapes.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot1', "images/Slot_Grapes.png", 5);
									setTimeout(function(){
										drawImages('canvasslot1', "images/Slot_Grapes.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot1', "images/Slot_Grapes.png", 15);
											setTimeout(function(){
												drawImages('canvasslot1', "images/Slot_Grapes.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot1', "images/Slot_Grapes.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot1', "images/Slot_Grapes.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot1', "images/Slot_Grapes.png", 35);
															setTimeout(function(){
																drawImages('canvasslot1', "images/Slot_Grapes.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot1', "images/Slot_Grapes.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot1', "images/Slot_Grapes.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot1', "images/Slot_Grapes.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot1', "images/Slot_Grapes.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot1', "images/Slot_Grapes.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot1', "images/Slot_Grapes.png", 70);
			drawImages('canvasslot1', "images/clover.png", -25);
			setTimeout(function(){
            drawImages('canvasslot1', "images/clover.png", -20);
				setTimeout(function(){
					drawImages('canvasslot1', "images/clover.png", -15);
					setTimeout(function(){
						drawImages('canvasslot1', "images/clover.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot1', "images/clover.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot1', "images/clover.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot1', "images/clover.png", 5);
									setTimeout(function(){
										drawImages('canvasslot1', "images/clover.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot1', "images/clover.png", 15);
											setTimeout(function(){
												drawImages('canvasslot1', "images/clover.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot1', "images/clover.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot1', "images/clover.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot1', "images/clover.png", 35);
															setTimeout(function(){
																drawImages('canvasslot1', "images/clover.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot1', "images/clover.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot1', "images/clover.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot1', "images/clover.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot1', "images/clover.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot1', "images/clover.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot1', "images/clover.png", 70);
			drawImages('canvasslot1', "images/bells-32.png", -25);
			setTimeout(function(){
            drawImages('canvasslot1', "images/bells-32.png", -20);
				setTimeout(function(){
					drawImages('canvasslot1', "images/bells-32.png", -15);
					setTimeout(function(){
						drawImages('canvasslot1', "images/bells-32.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot1', "images/bells-32.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot1', "images/bells-32.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot1', "images/bells-32.png", 5);
									setTimeout(function(){
										drawImages('canvasslot1', "images/bells-32.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot1', "images/bells-32.png", 15);
											setTimeout(function(){
												drawImages('canvasslot1', "images/bells-32.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot1', "images/bells-32.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot1', "images/bells-32.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot1', "images/bells-32.png", 35);
															setTimeout(function(){
																drawImages('canvasslot1', "images/bells-32.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot1', "images/bells-32.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot1', "images/bells-32.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot1', "images/bells-32.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot1', "images/bells-32.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot1', "images/bells-32.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot1', "images/bells-32.png", 70);
				drawImages('canvasslot1', "images/cherry.png", -25);
			setTimeout(function(){
            drawImages('canvasslot1', "images/cherry.png", -20);
				setTimeout(function(){
					drawImages('canvasslot1', "images/cherry.png", -15);
					setTimeout(function(){
						drawImages('canvasslot1', "images/cherry.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot1', "images/cherry.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot1', "images/cherry.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot1', "images/cherry.png", 5);
									setTimeout(function(){
										drawImages('canvasslot1', "images/cherry.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot1', "images/cherry.png", 15);
											setTimeout(function(){
												drawImages('canvasslot1', "images/cherry.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot1', "images/cherry.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot1', "images/cherry.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot1', "images/cherry.png", 35);
															setTimeout(function(){
																drawImages('canvasslot1', "images/cherry.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot1', "images/cherry.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot1', "images/cherry.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot1', "images/cherry.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot1', "images/cherry.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot1', "images/cherry.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot1', "images/cherry.png", 70);
			
			drawImages('canvasslot1', "images/Slot_Grapes.png", -25);
			setTimeout(function(){
            drawImages('canvasslot1', "images/Slot_Grapes.png", -20);
				setTimeout(function(){
					drawImages('canvasslot1', "images/Slot_Grapes.png", -15);
					setTimeout(function(){
						drawImages('canvasslot1', "images/Slot_Grapes.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot1', "images/Slot_Grapes.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot1', "images/Slot_Grapes.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot1', "images/Slot_Grapes.png", 5);
									setTimeout(function(){
										drawImages('canvasslot1', "images/Slot_Grapes.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot1', "images/Slot_Grapes.png", 15);
											setTimeout(function(){
												drawImages('canvasslot1', "images/Slot_Grapes.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot1', "images/Slot_Grapes.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot1', "images/Slot_Grapes.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot1', "images/Slot_Grapes.png", 35);	
		if(slot2 == 1){
					drawImages('canvasslot2', "images/lucky-seven.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/lucky-seven.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/lucky-seven.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/lucky-seven.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/lucky-seven.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/lucky-seven.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/lucky-seven.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/lucky-seven.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/lucky-seven.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/lucky-seven.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/lucky-seven.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/lucky-seven.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/lucky-seven.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/lucky-seven.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/lucky-seven.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/lucky-seven.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/lucky-seven.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/lucky-seven.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/lucky-seven.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/lucky-seven.png", 70);
			drawImages('canvasslot2', "images/Slot_Grapes.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/Slot_Grapes.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/Slot_Grapes.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/Slot_Grapes.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/Slot_Grapes.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/Slot_Grapes.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/Slot_Grapes.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/Slot_Grapes.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/Slot_Grapes.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/Slot_Grapes.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/Slot_Grapes.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/Slot_Grapes.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/Slot_Grapes.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/Slot_Grapes.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/Slot_Grapes.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/Slot_Grapes.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/Slot_Grapes.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/Slot_Grapes.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/Slot_Grapes.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/Slot_Grapes.png", 70);
			drawImages('canvasslot2', "images/clover.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/clover.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/clover.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/clover.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/clover.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/clover.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/clover.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/clover.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/clover.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/clover.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/clover.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/clover.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/clover.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/clover.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/clover.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/clover.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/clover.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/clover.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/clover.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/clover.png", 70);
																						
			drawImages('canvasslot2', "images/bells-32.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/bells-32.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/bells-32.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/bells-32.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/bells-32.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/bells-32.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/bells-32.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/bells-32.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/bells-32.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/bells-32.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/bells-32.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/bells-32.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/bells-32.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/bells-32.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/bells-32.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/bells-32.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/bells-32.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/bells-32.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/bells-32.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/bells-32.png", 70);
				drawImages('canvasslot2', "images/cherry.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/cherry.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/cherry.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/cherry.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/cherry.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/cherry.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/cherry.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/cherry.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/cherry.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/cherry.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/cherry.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/cherry.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/cherry.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/cherry.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/cherry.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/cherry.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/cherry.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/cherry.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/cherry.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/cherry.png", 70);
			
			drawImages('canvasslot2', "images/lucky-seven.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/lucky-seven.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/lucky-seven.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/lucky-seven.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/lucky-seven.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/lucky-seven.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/lucky-seven.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/lucky-seven.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/lucky-seven.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/lucky-seven.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/lucky-seven.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/lucky-seven.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/lucky-seven.png", 35);
		 if(slot3 == 1){
			 SpinAllImages3(loop3);
			drawImages('canvasslot3', "images/lucky-seven.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/lucky-seven.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/lucky-seven.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/lucky-seven.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/lucky-seven.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/lucky-seven.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/lucky-seven.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/lucky-seven.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/lucky-seven.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/lucky-seven.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/lucky-seven.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/lucky-seven.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/lucky-seven.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);	
		} else if( slot3 == 2){
			SpinAllImages3(loop3);
			drawImages('canvasslot3', "images/Slot_Grapes.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/Slot_Grapes.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/Slot_Grapes.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/Slot_Grapes.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/Slot_Grapes.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/Slot_Grapes.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/Slot_Grapes.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/Slot_Grapes.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/Slot_Grapes.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/Slot_Grapes.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/Slot_Grapes.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/Slot_Grapes.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/Slot_Grapes.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);				
		} else if(slot3 == 3){
			SpinAllImages3(loop3);
			drawImages('canvasslot3', "images/clover.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/clover.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/clover.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/clover.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/clover.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/clover.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/clover.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/clover.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/clover.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/clover.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/clover.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/clover.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/clover.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);					
		}else if(slot3 == 4){
			SpinAllImages3(loop3);
			drawImages('canvasslot3', "images/bells-32.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/bells-32.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/bells-32.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/bells-32.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/bells-32.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/bells-32.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/bells-32.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/bells-32.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/bells-32.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/bells-32.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/bells-32.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/bells-32.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/bells-32.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);				
		}else if(slot3 == 5){
			SpinAllImages3(loop3);
			drawImages('canvasslot3', "images/cherry.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/cherry.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/cherry.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/cherry.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/cherry.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/cherry.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/cherry.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/cherry.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/cherry.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/cherry.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/cherry.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/cherry.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/cherry.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);					
		}
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																						
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																										
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																										
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																										
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);			
		} else if( slot2 == 2){
					drawImages('canvasslot2', "images/lucky-seven.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/lucky-seven.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/lucky-seven.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/lucky-seven.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/lucky-seven.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/lucky-seven.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/lucky-seven.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/lucky-seven.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/lucky-seven.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/lucky-seven.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/lucky-seven.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/lucky-seven.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/lucky-seven.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/lucky-seven.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/lucky-seven.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/lucky-seven.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/lucky-seven.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/lucky-seven.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/lucky-seven.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/lucky-seven.png", 70);
			drawImages('canvasslot2', "images/Slot_Grapes.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/Slot_Grapes.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/Slot_Grapes.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/Slot_Grapes.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/Slot_Grapes.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/Slot_Grapes.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/Slot_Grapes.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/Slot_Grapes.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/Slot_Grapes.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/Slot_Grapes.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/Slot_Grapes.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/Slot_Grapes.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/Slot_Grapes.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/Slot_Grapes.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/Slot_Grapes.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/Slot_Grapes.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/Slot_Grapes.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/Slot_Grapes.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/Slot_Grapes.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/Slot_Grapes.png", 70);
			drawImages('canvasslot2', "images/clover.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/clover.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/clover.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/clover.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/clover.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/clover.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/clover.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/clover.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/clover.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/clover.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/clover.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/clover.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/clover.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/clover.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/clover.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/clover.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/clover.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/clover.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/clover.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/clover.png", 70);
																						
			drawImages('canvasslot2', "images/bells-32.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/bells-32.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/bells-32.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/bells-32.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/bells-32.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/bells-32.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/bells-32.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/bells-32.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/bells-32.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/bells-32.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/bells-32.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/bells-32.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/bells-32.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/bells-32.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/bells-32.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/bells-32.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/bells-32.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/bells-32.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/bells-32.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/bells-32.png", 70);
				drawImages('canvasslot2', "images/cherry.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/cherry.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/cherry.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/cherry.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/cherry.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/cherry.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/cherry.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/cherry.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/cherry.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/cherry.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/cherry.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/cherry.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/cherry.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/cherry.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/cherry.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/cherry.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/cherry.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/cherry.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/cherry.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/cherry.png", 70);
			
			drawImages('canvasslot2', "images/Slot_Grapes.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/Slot_Grapes.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/Slot_Grapes.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/Slot_Grapes.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/Slot_Grapes.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/Slot_Grapes.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/Slot_Grapes.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/Slot_Grapes.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/Slot_Grapes.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/Slot_Grapes.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/Slot_Grapes.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/Slot_Grapes.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/Slot_Grapes.png", 35);
		 if(slot3 == 1){
			SpinAllImages3(loop3);
			drawImages('canvasslot3', "images/lucky-seven.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/lucky-seven.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/lucky-seven.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/lucky-seven.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/lucky-seven.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/lucky-seven.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/lucky-seven.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/lucky-seven.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/lucky-seven.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/lucky-seven.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/lucky-seven.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/lucky-seven.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/lucky-seven.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);	
		} else if( slot3 == 2){
			SpinAllImages3(loop3);
			drawImages('canvasslot3', "images/Slot_Grapes.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/Slot_Grapes.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/Slot_Grapes.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/Slot_Grapes.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/Slot_Grapes.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/Slot_Grapes.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/Slot_Grapes.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/Slot_Grapes.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/Slot_Grapes.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/Slot_Grapes.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/Slot_Grapes.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/Slot_Grapes.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/Slot_Grapes.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);				
		} else if(slot3 == 3){
			SpinAllImages3(loop3);
			drawImages('canvasslot3', "images/clover.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/clover.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/clover.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/clover.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/clover.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/clover.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/clover.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/clover.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/clover.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/clover.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/clover.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/clover.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/clover.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);					
		}else if(slot3 == 4){
			SpinAllImages3(loop3);
			drawImages('canvasslot3', "images/bells-32.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/bells-32.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/bells-32.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/bells-32.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/bells-32.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/bells-32.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/bells-32.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/bells-32.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/bells-32.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/bells-32.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/bells-32.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/bells-32.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/bells-32.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);				
		}else if(slot3 == 5){
			SpinAllImages3(loop3);
			drawImages('canvasslot3', "images/cherry.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/cherry.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/cherry.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/cherry.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/cherry.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/cherry.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/cherry.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/cherry.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/cherry.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/cherry.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/cherry.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/cherry.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/cherry.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);					
		}
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																						
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																										
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																										
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																										
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);				
		} else if(slot2 == 3){
					drawImages('canvasslot2', "images/lucky-seven.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/lucky-seven.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/lucky-seven.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/lucky-seven.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/lucky-seven.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/lucky-seven.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/lucky-seven.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/lucky-seven.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/lucky-seven.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/lucky-seven.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/lucky-seven.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/lucky-seven.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/lucky-seven.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/lucky-seven.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/lucky-seven.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/lucky-seven.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/lucky-seven.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/lucky-seven.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/lucky-seven.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/lucky-seven.png", 70);
			drawImages('canvasslot2', "images/Slot_Grapes.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/Slot_Grapes.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/Slot_Grapes.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/Slot_Grapes.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/Slot_Grapes.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/Slot_Grapes.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/Slot_Grapes.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/Slot_Grapes.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/Slot_Grapes.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/Slot_Grapes.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/Slot_Grapes.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/Slot_Grapes.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/Slot_Grapes.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/Slot_Grapes.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/Slot_Grapes.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/Slot_Grapes.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/Slot_Grapes.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/Slot_Grapes.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/Slot_Grapes.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/Slot_Grapes.png", 70);
			drawImages('canvasslot2', "images/clover.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/clover.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/clover.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/clover.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/clover.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/clover.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/clover.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/clover.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/clover.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/clover.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/clover.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/clover.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/clover.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/clover.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/clover.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/clover.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/clover.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/clover.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/clover.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/clover.png", 70);
																						
			drawImages('canvasslot2', "images/bells-32.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/bells-32.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/bells-32.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/bells-32.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/bells-32.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/bells-32.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/bells-32.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/bells-32.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/bells-32.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/bells-32.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/bells-32.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/bells-32.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/bells-32.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/bells-32.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/bells-32.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/bells-32.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/bells-32.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/bells-32.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/bells-32.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/bells-32.png", 70);
				drawImages('canvasslot2', "images/cherry.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/cherry.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/cherry.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/cherry.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/cherry.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/cherry.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/cherry.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/cherry.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/cherry.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/cherry.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/cherry.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/cherry.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/cherry.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/cherry.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/cherry.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/cherry.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/cherry.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/cherry.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/cherry.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/cherry.png", 70);
			
			drawImages('canvasslot2', "images/clover.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/clover.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/clover.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/clover.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/clover.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/clover.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/clover.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/clover.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/clover.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/clover.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/clover.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/clover.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/clover.png", 35);	
		 if(slot3 == 1){
			SpinAllImages3(loop3);
			drawImages('canvasslot3', "images/lucky-seven.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/lucky-seven.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/lucky-seven.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/lucky-seven.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/lucky-seven.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/lucky-seven.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/lucky-seven.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/lucky-seven.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/lucky-seven.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/lucky-seven.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/lucky-seven.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/lucky-seven.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/lucky-seven.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);	
		} else if( slot3 == 2){
			SpinAllImages3(loop3);
			drawImages('canvasslot3', "images/Slot_Grapes.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/Slot_Grapes.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/Slot_Grapes.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/Slot_Grapes.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/Slot_Grapes.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/Slot_Grapes.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/Slot_Grapes.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/Slot_Grapes.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/Slot_Grapes.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/Slot_Grapes.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/Slot_Grapes.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/Slot_Grapes.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/Slot_Grapes.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);				
		} else if(slot3 == 3){
			SpinAllImages3(loop3);
			drawImages('canvasslot3', "images/clover.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/clover.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/clover.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/clover.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/clover.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/clover.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/clover.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/clover.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/clover.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/clover.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/clover.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/clover.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/clover.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);					
		}else if(slot3 == 4){
			SpinAllImages3(loop3);
			drawImages('canvasslot3', "images/bells-32.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/bells-32.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/bells-32.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/bells-32.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/bells-32.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/bells-32.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/bells-32.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/bells-32.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/bells-32.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/bells-32.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/bells-32.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/bells-32.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/bells-32.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);				
		}else if(slot3 == 5){
			SpinAllImages3(loop3);
			drawImages('canvasslot3', "images/cherry.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/cherry.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/cherry.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/cherry.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/cherry.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/cherry.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/cherry.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/cherry.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/cherry.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/cherry.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/cherry.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/cherry.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/cherry.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);					
		}
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																						
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																										
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																										
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																										
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);						
		}else if(slot2 == 4){
					drawImages('canvasslot2', "images/lucky-seven.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/lucky-seven.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/lucky-seven.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/lucky-seven.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/lucky-seven.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/lucky-seven.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/lucky-seven.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/lucky-seven.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/lucky-seven.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/lucky-seven.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/lucky-seven.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/lucky-seven.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/lucky-seven.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/lucky-seven.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/lucky-seven.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/lucky-seven.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/lucky-seven.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/lucky-seven.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/lucky-seven.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/lucky-seven.png", 70);
			drawImages('canvasslot2', "images/Slot_Grapes.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/Slot_Grapes.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/Slot_Grapes.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/Slot_Grapes.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/Slot_Grapes.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/Slot_Grapes.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/Slot_Grapes.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/Slot_Grapes.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/Slot_Grapes.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/Slot_Grapes.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/Slot_Grapes.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/Slot_Grapes.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/Slot_Grapes.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/Slot_Grapes.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/Slot_Grapes.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/Slot_Grapes.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/Slot_Grapes.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/Slot_Grapes.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/Slot_Grapes.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/Slot_Grapes.png", 70);
			drawImages('canvasslot2', "images/clover.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/clover.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/clover.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/clover.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/clover.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/clover.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/clover.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/clover.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/clover.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/clover.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/clover.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/clover.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/clover.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/clover.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/clover.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/clover.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/clover.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/clover.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/clover.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/clover.png", 70);
																						
			drawImages('canvasslot2', "images/bells-32.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/bells-32.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/bells-32.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/bells-32.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/bells-32.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/bells-32.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/bells-32.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/bells-32.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/bells-32.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/bells-32.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/bells-32.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/bells-32.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/bells-32.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/bells-32.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/bells-32.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/bells-32.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/bells-32.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/bells-32.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/bells-32.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/bells-32.png", 70);
				drawImages('canvasslot2', "images/cherry.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/cherry.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/cherry.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/cherry.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/cherry.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/cherry.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/cherry.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/cherry.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/cherry.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/cherry.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/cherry.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/cherry.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/cherry.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/cherry.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/cherry.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/cherry.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/cherry.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/cherry.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/cherry.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/cherry.png", 70);
			
			drawImages('canvasslot2', "images/bells-32.png",-25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/bells-32.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/bells-32.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/bells-32.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/bells-32.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/bells-32.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/bells-32.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/bells-32.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/bells-32.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/bells-32.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/bells-32.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/bells-32.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/bells-32.png", 35);	
		 if(slot3 == 1){
			 SpinAllImages3(loop3);
			drawImages('canvasslot3', "images/lucky-seven.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/lucky-seven.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/lucky-seven.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/lucky-seven.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/lucky-seven.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/lucky-seven.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/lucky-seven.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/lucky-seven.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/lucky-seven.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/lucky-seven.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/lucky-seven.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/lucky-seven.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/lucky-seven.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);	
		} else if( slot3 == 2){
			SpinAllImages3(loop3);
			drawImages('canvasslot3', "images/Slot_Grapes.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/Slot_Grapes.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/Slot_Grapes.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/Slot_Grapes.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/Slot_Grapes.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/Slot_Grapes.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/Slot_Grapes.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/Slot_Grapes.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/Slot_Grapes.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/Slot_Grapes.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/Slot_Grapes.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/Slot_Grapes.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/Slot_Grapes.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);				
		} else if(slot3 == 3){
			SpinAllImages3(loop3);
			drawImages('canvasslot3', "images/clover.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/clover.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/clover.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/clover.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/clover.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/clover.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/clover.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/clover.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/clover.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/clover.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/clover.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/clover.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/clover.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);					
		}else if(slot3 == 4){
			SpinAllImages3(loop3);
			drawImages('canvasslot3', "images/bells-32.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/bells-32.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/bells-32.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/bells-32.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/bells-32.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/bells-32.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/bells-32.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/bells-32.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/bells-32.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/bells-32.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/bells-32.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/bells-32.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/bells-32.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);				
		}else if(slot3 == 5){
			SpinAllImages3(loop3);
			drawImages('canvasslot3', "images/cherry.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/cherry.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/cherry.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/cherry.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/cherry.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/cherry.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/cherry.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/cherry.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/cherry.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/cherry.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/cherry.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/cherry.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/cherry.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);					
		}
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																						
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																										
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																										
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																										
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);				
		}else if(slot2 == 5){
					drawImages('canvasslot2', "images/lucky-seven.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/lucky-seven.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/lucky-seven.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/lucky-seven.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/lucky-seven.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/lucky-seven.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/lucky-seven.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/lucky-seven.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/lucky-seven.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/lucky-seven.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/lucky-seven.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/lucky-seven.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/lucky-seven.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/lucky-seven.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/lucky-seven.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/lucky-seven.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/lucky-seven.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/lucky-seven.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/lucky-seven.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/lucky-seven.png", 70);
			drawImages('canvasslot2', "images/Slot_Grapes.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/Slot_Grapes.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/Slot_Grapes.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/Slot_Grapes.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/Slot_Grapes.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/Slot_Grapes.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/Slot_Grapes.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/Slot_Grapes.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/Slot_Grapes.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/Slot_Grapes.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/Slot_Grapes.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/Slot_Grapes.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/Slot_Grapes.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/Slot_Grapes.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/Slot_Grapes.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/Slot_Grapes.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/Slot_Grapes.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/Slot_Grapes.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/Slot_Grapes.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/Slot_Grapes.png", 70);
			drawImages('canvasslot2', "images/clover.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/clover.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/clover.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/clover.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/clover.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/clover.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/clover.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/clover.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/clover.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/clover.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/clover.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/clover.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/clover.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/clover.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/clover.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/clover.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/clover.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/clover.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/clover.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/clover.png", 70);
																						
			drawImages('canvasslot2', "images/bells-32.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/bells-32.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/bells-32.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/bells-32.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/bells-32.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/bells-32.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/bells-32.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/bells-32.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/bells-32.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/bells-32.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/bells-32.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/bells-32.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/bells-32.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/bells-32.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/bells-32.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/bells-32.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/bells-32.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/bells-32.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/bells-32.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/bells-32.png", 70);
				drawImages('canvasslot2', "images/cherry.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/cherry.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/cherry.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/cherry.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/cherry.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/cherry.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/cherry.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/cherry.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/cherry.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/cherry.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/cherry.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/cherry.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/cherry.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/cherry.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/cherry.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/cherry.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/cherry.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/cherry.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/cherry.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/cherry.png", 70);
			
			drawImages('canvasslot2', "images/cherry.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/cherry.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/cherry.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/cherry.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/cherry.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/cherry.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/cherry.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/cherry.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/cherry.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/cherry.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/cherry.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/cherry.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/cherry.png", 35);	
		 if(slot3 == 1){
			SpinAllImages3(loop3);
			drawImages('canvasslot3', "images/lucky-seven.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/lucky-seven.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/lucky-seven.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/lucky-seven.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/lucky-seven.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/lucky-seven.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/lucky-seven.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/lucky-seven.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/lucky-seven.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/lucky-seven.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/lucky-seven.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/lucky-seven.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/lucky-seven.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);	
		} else if( slot3 == 2){
			SpinAllImages3(loop3);
			drawImages('canvasslot3', "images/Slot_Grapes.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/Slot_Grapes.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/Slot_Grapes.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/Slot_Grapes.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/Slot_Grapes.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/Slot_Grapes.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/Slot_Grapes.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/Slot_Grapes.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/Slot_Grapes.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/Slot_Grapes.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/Slot_Grapes.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/Slot_Grapes.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/Slot_Grapes.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);				
		} else if(slot3 == 3){
			SpinAllImages3(loop3);
			drawImages('canvasslot3', "images/clover.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/clover.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/clover.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/clover.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/clover.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/clover.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/clover.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/clover.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/clover.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/clover.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/clover.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/clover.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/clover.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);					
		}else if(slot3 == 4){
			SpinAllImages3(loop3);
			drawImages('canvasslot3', "images/bells-32.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/bells-32.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/bells-32.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/bells-32.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/bells-32.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/bells-32.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/bells-32.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/bells-32.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/bells-32.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/bells-32.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/bells-32.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/bells-32.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/bells-32.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);				
		}else if(slot3 == 5){
			SpinAllImages3(loop3);
			drawImages('canvasslot3', "images/cherry.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/cherry.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/cherry.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/cherry.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/cherry.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/cherry.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/cherry.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/cherry.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/cherry.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/cherry.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/cherry.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/cherry.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/cherry.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);					
		}
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																						
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																										
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																										
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																										
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);					
		}
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																						
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																										
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																										
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																										
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);		
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);
		} else if(slot1 == 3){
					drawImages('canvasslot1', "images/lucky-seven.png", -25);
			setTimeout(function(){
            drawImages('canvasslot1', "images/lucky-seven.png", -20);
				setTimeout(function(){
					drawImages('canvasslot1', "images/lucky-seven.png", -15);
					setTimeout(function(){
						drawImages('canvasslot1', "images/lucky-seven.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot1', "images/lucky-seven.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot1', "images/lucky-seven.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot1', "images/lucky-seven.png", 5);
									setTimeout(function(){
										drawImages('canvasslot1', "images/lucky-seven.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot1', "images/lucky-seven.png", 15);
											setTimeout(function(){
												drawImages('canvasslot1', "images/lucky-seven.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot1', "images/lucky-seven.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot1', "images/lucky-seven.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot1', "images/lucky-seven.png", 35);
															setTimeout(function(){
																drawImages('canvasslot1', "images/lucky-seven.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot1', "images/lucky-seven.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot1', "images/lucky-seven.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot1', "images/lucky-seven.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot1', "images/lucky-seven.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot1', "images/lucky-seven.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot1', "images/lucky-seven.png", 70);
			drawImages('canvasslot1', "images/Slot_Grapes.png", -25);
			setTimeout(function(){
            drawImages('canvasslot1', "images/Slot_Grapes.png", -20);
				setTimeout(function(){
					drawImages('canvasslot1', "images/Slot_Grapes.png", -15);
					setTimeout(function(){
						drawImages('canvasslot1', "images/Slot_Grapes.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot1', "images/Slot_Grapes.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot1', "images/Slot_Grapes.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot1', "images/Slot_Grapes.png", 5);
									setTimeout(function(){
										drawImages('canvasslot1', "images/Slot_Grapes.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot1', "images/Slot_Grapes.png", 15);
											setTimeout(function(){
												drawImages('canvasslot1', "images/Slot_Grapes.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot1', "images/Slot_Grapes.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot1', "images/Slot_Grapes.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot1', "images/Slot_Grapes.png", 35);
															setTimeout(function(){
																drawImages('canvasslot1', "images/Slot_Grapes.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot1', "images/Slot_Grapes.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot1', "images/Slot_Grapes.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot1', "images/Slot_Grapes.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot1', "images/Slot_Grapes.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot1', "images/Slot_Grapes.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot1', "images/Slot_Grapes.png", 70);
			drawImages('canvasslot1', "images/clover.png", -25);
			setTimeout(function(){
            drawImages('canvasslot1', "images/clover.png", -20);
				setTimeout(function(){
					drawImages('canvasslot1', "images/clover.png", -15);
					setTimeout(function(){
						drawImages('canvasslot1', "images/clover.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot1', "images/clover.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot1', "images/clover.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot1', "images/clover.png", 5);
									setTimeout(function(){
										drawImages('canvasslot1', "images/clover.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot1', "images/clover.png", 15);
											setTimeout(function(){
												drawImages('canvasslot1', "images/clover.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot1', "images/clover.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot1', "images/clover.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot1', "images/clover.png", 35);
															setTimeout(function(){
																drawImages('canvasslot1', "images/clover.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot1', "images/clover.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot1', "images/clover.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot1', "images/clover.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot1', "images/clover.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot1', "images/clover.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot1', "images/clover.png", 70);
			drawImages('canvasslot1', "images/bells-32.png", -25);
			setTimeout(function(){
            drawImages('canvasslot1', "images/bells-32.png", -20);
				setTimeout(function(){
					drawImages('canvasslot1', "images/bells-32.png", -15);
					setTimeout(function(){
						drawImages('canvasslot1', "images/bells-32.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot1', "images/bells-32.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot1', "images/bells-32.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot1', "images/bells-32.png", 5);
									setTimeout(function(){
										drawImages('canvasslot1', "images/bells-32.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot1', "images/bells-32.png", 15);
											setTimeout(function(){
												drawImages('canvasslot1', "images/bells-32.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot1', "images/bells-32.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot1', "images/bells-32.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot1', "images/bells-32.png", 35);
															setTimeout(function(){
																drawImages('canvasslot1', "images/bells-32.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot1', "images/bells-32.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot1', "images/bells-32.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot1', "images/bells-32.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot1', "images/bells-32.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot1', "images/bells-32.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot1', "images/bells-32.png", 70);
				drawImages('canvasslot1', "images/cherry.png", -25);
			setTimeout(function(){
            drawImages('canvasslot1', "images/cherry.png", -20);
				setTimeout(function(){
					drawImages('canvasslot1', "images/cherry.png", -15);
					setTimeout(function(){
						drawImages('canvasslot1', "images/cherry.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot1', "images/cherry.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot1', "images/cherry.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot1', "images/cherry.png", 5);
									setTimeout(function(){
										drawImages('canvasslot1', "images/cherry.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot1', "images/cherry.png", 15);
											setTimeout(function(){
												drawImages('canvasslot1', "images/cherry.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot1', "images/cherry.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot1', "images/cherry.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot1', "images/cherry.png", 35);
															setTimeout(function(){
																drawImages('canvasslot1', "images/cherry.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot1', "images/cherry.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot1', "images/cherry.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot1', "images/cherry.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot1', "images/cherry.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot1', "images/cherry.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot1', "images/cherry.png", 70);
																						//------------
			drawImages('canvasslot1', "images/clover.png", -25);
			setTimeout(function(){
            drawImages('canvasslot1', "images/clover.png", -20);
				setTimeout(function(){
					drawImages('canvasslot1', "images/clover.png", -15);
					setTimeout(function(){
						drawImages('canvasslot1', "images/clover.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot1', "images/clover.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot1', "images/clover.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot1', "images/clover.png", 5);
									setTimeout(function(){
										drawImages('canvasslot1', "images/clover.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot1', "images/clover.png", 15);
											setTimeout(function(){
												drawImages('canvasslot1', "images/clover.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot1', "images/clover.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot1', "images/clover.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot1', "images/clover.png", 35);			
		if(slot2 == 1){
					drawImages('canvasslot2', "images/lucky-seven.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/lucky-seven.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/lucky-seven.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/lucky-seven.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/lucky-seven.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/lucky-seven.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/lucky-seven.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/lucky-seven.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/lucky-seven.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/lucky-seven.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/lucky-seven.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/lucky-seven.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/lucky-seven.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/lucky-seven.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/lucky-seven.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/lucky-seven.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/lucky-seven.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/lucky-seven.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/lucky-seven.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/lucky-seven.png", 70);
			drawImages('canvasslot2', "images/Slot_Grapes.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/Slot_Grapes.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/Slot_Grapes.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/Slot_Grapes.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/Slot_Grapes.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/Slot_Grapes.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/Slot_Grapes.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/Slot_Grapes.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/Slot_Grapes.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/Slot_Grapes.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/Slot_Grapes.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/Slot_Grapes.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/Slot_Grapes.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/Slot_Grapes.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/Slot_Grapes.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/Slot_Grapes.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/Slot_Grapes.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/Slot_Grapes.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/Slot_Grapes.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/Slot_Grapes.png", 70);
			drawImages('canvasslot2', "images/clover.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/clover.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/clover.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/clover.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/clover.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/clover.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/clover.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/clover.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/clover.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/clover.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/clover.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/clover.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/clover.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/clover.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/clover.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/clover.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/clover.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/clover.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/clover.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/clover.png", 70);
																						
			drawImages('canvasslot2', "images/bells-32.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/bells-32.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/bells-32.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/bells-32.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/bells-32.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/bells-32.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/bells-32.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/bells-32.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/bells-32.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/bells-32.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/bells-32.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/bells-32.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/bells-32.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/bells-32.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/bells-32.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/bells-32.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/bells-32.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/bells-32.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/bells-32.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/bells-32.png", 70);
				drawImages('canvasslot2', "images/cherry.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/cherry.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/cherry.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/cherry.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/cherry.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/cherry.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/cherry.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/cherry.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/cherry.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/cherry.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/cherry.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/cherry.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/cherry.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/cherry.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/cherry.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/cherry.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/cherry.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/cherry.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/cherry.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/cherry.png", 70);
			drawImages('canvasslot2', "images/lucky-seven.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/lucky-seven.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/lucky-seven.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/lucky-seven.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/lucky-seven.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/lucky-seven.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/lucky-seven.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/lucky-seven.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/lucky-seven.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/lucky-seven.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/lucky-seven.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/lucky-seven.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/lucky-seven.png", 35);
		 if(slot3 == 1){
			drawImages('canvasslot3', "images/lucky-seven.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/lucky-seven.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/lucky-seven.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/lucky-seven.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/lucky-seven.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/lucky-seven.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/lucky-seven.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/lucky-seven.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/lucky-seven.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/lucky-seven.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/lucky-seven.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/lucky-seven.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/lucky-seven.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);	
		} else if( slot3 == 2){
			drawImages('canvasslot3', "images/Slot_Grapes.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/Slot_Grapes.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/Slot_Grapes.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/Slot_Grapes.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/Slot_Grapes.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/Slot_Grapes.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/Slot_Grapes.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/Slot_Grapes.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/Slot_Grapes.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/Slot_Grapes.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/Slot_Grapes.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/Slot_Grapes.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/Slot_Grapes.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);				
		} else if(slot3 == 3){
			drawImages('canvasslot3', "images/clover.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/clover.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/clover.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/clover.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/clover.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/clover.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/clover.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/clover.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/clover.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/clover.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/clover.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/clover.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/clover.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);					
		}else if(slot3 == 4){
			drawImages('canvasslot3', "images/bells-32.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/bells-32.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/bells-32.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/bells-32.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/bells-32.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/bells-32.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/bells-32.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/bells-32.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/bells-32.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/bells-32.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/bells-32.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/bells-32.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/bells-32.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);				
		}else if(slot3 == 5){
			drawImages('canvasslot3', "images/cherry.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/cherry.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/cherry.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/cherry.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/cherry.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/cherry.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/cherry.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/cherry.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/cherry.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/cherry.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/cherry.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/cherry.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/cherry.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);					
		}
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																						
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																										
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																										
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																										
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);			
		} else if( slot2 == 2){
					drawImages('canvasslot2', "images/lucky-seven.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/lucky-seven.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/lucky-seven.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/lucky-seven.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/lucky-seven.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/lucky-seven.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/lucky-seven.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/lucky-seven.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/lucky-seven.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/lucky-seven.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/lucky-seven.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/lucky-seven.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/lucky-seven.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/lucky-seven.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/lucky-seven.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/lucky-seven.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/lucky-seven.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/lucky-seven.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/lucky-seven.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/lucky-seven.png", 70);
			drawImages('canvasslot2', "images/Slot_Grapes.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/Slot_Grapes.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/Slot_Grapes.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/Slot_Grapes.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/Slot_Grapes.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/Slot_Grapes.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/Slot_Grapes.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/Slot_Grapes.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/Slot_Grapes.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/Slot_Grapes.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/Slot_Grapes.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/Slot_Grapes.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/Slot_Grapes.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/Slot_Grapes.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/Slot_Grapes.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/Slot_Grapes.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/Slot_Grapes.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/Slot_Grapes.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/Slot_Grapes.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/Slot_Grapes.png", 70);
			drawImages('canvasslot2', "images/clover.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/clover.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/clover.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/clover.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/clover.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/clover.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/clover.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/clover.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/clover.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/clover.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/clover.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/clover.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/clover.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/clover.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/clover.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/clover.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/clover.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/clover.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/clover.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/clover.png", 70);
																						
			drawImages('canvasslot2', "images/bells-32.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/bells-32.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/bells-32.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/bells-32.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/bells-32.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/bells-32.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/bells-32.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/bells-32.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/bells-32.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/bells-32.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/bells-32.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/bells-32.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/bells-32.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/bells-32.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/bells-32.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/bells-32.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/bells-32.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/bells-32.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/bells-32.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/bells-32.png", 70);
				drawImages('canvasslot2', "images/cherry.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/cherry.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/cherry.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/cherry.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/cherry.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/cherry.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/cherry.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/cherry.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/cherry.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/cherry.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/cherry.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/cherry.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/cherry.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/cherry.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/cherry.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/cherry.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/cherry.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/cherry.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/cherry.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/cherry.png", 70);
			drawImages('canvasslot2', "images/Slot_Grapes.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/Slot_Grapes.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/Slot_Grapes.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/Slot_Grapes.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/Slot_Grapes.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/Slot_Grapes.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/Slot_Grapes.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/Slot_Grapes.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/Slot_Grapes.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/Slot_Grapes.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/Slot_Grapes.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/Slot_Grapes.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/Slot_Grapes.png", 35);
		 if(slot3 == 1){
			drawImages('canvasslot3', "images/lucky-seven.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/lucky-seven.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/lucky-seven.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/lucky-seven.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/lucky-seven.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/lucky-seven.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/lucky-seven.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/lucky-seven.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/lucky-seven.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/lucky-seven.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/lucky-seven.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/lucky-seven.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/lucky-seven.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);	
		} else if( slot3 == 2){
			drawImages('canvasslot3', "images/Slot_Grapes.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/Slot_Grapes.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/Slot_Grapes.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/Slot_Grapes.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/Slot_Grapes.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/Slot_Grapes.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/Slot_Grapes.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/Slot_Grapes.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/Slot_Grapes.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/Slot_Grapes.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/Slot_Grapes.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/Slot_Grapes.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/Slot_Grapes.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);				
		} else if(slot3 == 3){
			drawImages('canvasslot3', "images/clover.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/clover.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/clover.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/clover.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/clover.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/clover.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/clover.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/clover.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/clover.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/clover.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/clover.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/clover.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/clover.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);					
		}else if(slot3 == 4){
			drawImages('canvasslot3', "images/bells-32.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/bells-32.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/bells-32.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/bells-32.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/bells-32.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/bells-32.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/bells-32.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/bells-32.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/bells-32.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/bells-32.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/bells-32.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/bells-32.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/bells-32.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);				
		}else if(slot3 == 5){
			drawImages('canvasslot3', "images/cherry.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/cherry.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/cherry.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/cherry.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/cherry.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/cherry.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/cherry.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/cherry.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/cherry.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/cherry.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/cherry.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/cherry.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/cherry.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);					
		}
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																						
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																										
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																										
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																										
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);				
		} else if(slot2 == 3){
					drawImages('canvasslot2', "images/lucky-seven.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/lucky-seven.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/lucky-seven.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/lucky-seven.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/lucky-seven.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/lucky-seven.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/lucky-seven.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/lucky-seven.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/lucky-seven.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/lucky-seven.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/lucky-seven.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/lucky-seven.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/lucky-seven.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/lucky-seven.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/lucky-seven.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/lucky-seven.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/lucky-seven.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/lucky-seven.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/lucky-seven.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/lucky-seven.png", 70);
			drawImages('canvasslot2', "images/Slot_Grapes.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/Slot_Grapes.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/Slot_Grapes.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/Slot_Grapes.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/Slot_Grapes.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/Slot_Grapes.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/Slot_Grapes.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/Slot_Grapes.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/Slot_Grapes.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/Slot_Grapes.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/Slot_Grapes.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/Slot_Grapes.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/Slot_Grapes.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/Slot_Grapes.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/Slot_Grapes.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/Slot_Grapes.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/Slot_Grapes.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/Slot_Grapes.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/Slot_Grapes.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/Slot_Grapes.png", 70);
			drawImages('canvasslot2', "images/clover.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/clover.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/clover.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/clover.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/clover.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/clover.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/clover.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/clover.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/clover.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/clover.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/clover.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/clover.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/clover.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/clover.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/clover.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/clover.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/clover.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/clover.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/clover.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/clover.png", 70);
																						
			drawImages('canvasslot2', "images/bells-32.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/bells-32.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/bells-32.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/bells-32.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/bells-32.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/bells-32.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/bells-32.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/bells-32.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/bells-32.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/bells-32.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/bells-32.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/bells-32.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/bells-32.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/bells-32.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/bells-32.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/bells-32.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/bells-32.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/bells-32.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/bells-32.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/bells-32.png", 70);
				drawImages('canvasslot2', "images/cherry.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/cherry.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/cherry.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/cherry.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/cherry.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/cherry.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/cherry.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/cherry.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/cherry.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/cherry.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/cherry.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/cherry.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/cherry.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/cherry.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/cherry.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/cherry.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/cherry.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/cherry.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/cherry.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/cherry.png", 70);
			drawImages('canvasslot2', "images/clover.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/clover.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/clover.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/clover.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/clover.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/clover.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/clover.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/clover.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/clover.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/clover.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/clover.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/clover.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/clover.png", 35);
		 if(slot3 == 1){
			drawImages('canvasslot3', "images/lucky-seven.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/lucky-seven.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/lucky-seven.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/lucky-seven.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/lucky-seven.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/lucky-seven.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/lucky-seven.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/lucky-seven.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/lucky-seven.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/lucky-seven.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/lucky-seven.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/lucky-seven.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/lucky-seven.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);	
		} else if( slot3 == 2){
			drawImages('canvasslot3', "images/Slot_Grapes.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/Slot_Grapes.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/Slot_Grapes.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/Slot_Grapes.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/Slot_Grapes.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/Slot_Grapes.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/Slot_Grapes.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/Slot_Grapes.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/Slot_Grapes.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/Slot_Grapes.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/Slot_Grapes.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/Slot_Grapes.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/Slot_Grapes.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);				
		} else if(slot3 == 3){
			drawImages('canvasslot3', "images/clover.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/clover.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/clover.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/clover.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/clover.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/clover.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/clover.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/clover.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/clover.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/clover.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/clover.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/clover.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/clover.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);					
		}else if(slot3 == 4){
			drawImages('canvasslot3', "images/bells-32.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/bells-32.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/bells-32.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/bells-32.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/bells-32.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/bells-32.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/bells-32.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/bells-32.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/bells-32.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/bells-32.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/bells-32.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/bells-32.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/bells-32.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);				
		}else if(slot3 == 5){
			drawImages('canvasslot3', "images/cherry.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/cherry.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/cherry.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/cherry.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/cherry.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/cherry.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/cherry.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/cherry.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/cherry.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/cherry.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/cherry.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/cherry.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/cherry.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);					
		}
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																						
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																										
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																										
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																										
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);						
		}else if(slot2 == 4){
					drawImages('canvasslot2', "images/lucky-seven.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/lucky-seven.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/lucky-seven.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/lucky-seven.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/lucky-seven.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/lucky-seven.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/lucky-seven.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/lucky-seven.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/lucky-seven.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/lucky-seven.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/lucky-seven.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/lucky-seven.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/lucky-seven.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/lucky-seven.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/lucky-seven.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/lucky-seven.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/lucky-seven.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/lucky-seven.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/lucky-seven.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/lucky-seven.png", 70);
			drawImages('canvasslot2', "images/Slot_Grapes.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/Slot_Grapes.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/Slot_Grapes.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/Slot_Grapes.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/Slot_Grapes.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/Slot_Grapes.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/Slot_Grapes.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/Slot_Grapes.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/Slot_Grapes.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/Slot_Grapes.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/Slot_Grapes.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/Slot_Grapes.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/Slot_Grapes.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/Slot_Grapes.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/Slot_Grapes.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/Slot_Grapes.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/Slot_Grapes.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/Slot_Grapes.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/Slot_Grapes.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/Slot_Grapes.png", 70);
			drawImages('canvasslot2', "images/clover.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/clover.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/clover.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/clover.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/clover.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/clover.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/clover.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/clover.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/clover.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/clover.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/clover.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/clover.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/clover.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/clover.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/clover.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/clover.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/clover.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/clover.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/clover.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/clover.png", 70);
																						
			drawImages('canvasslot2', "images/bells-32.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/bells-32.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/bells-32.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/bells-32.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/bells-32.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/bells-32.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/bells-32.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/bells-32.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/bells-32.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/bells-32.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/bells-32.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/bells-32.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/bells-32.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/bells-32.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/bells-32.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/bells-32.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/bells-32.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/bells-32.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/bells-32.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/bells-32.png", 70);
				drawImages('canvasslot2', "images/cherry.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/cherry.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/cherry.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/cherry.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/cherry.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/cherry.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/cherry.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/cherry.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/cherry.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/cherry.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/cherry.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/cherry.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/cherry.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/cherry.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/cherry.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/cherry.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/cherry.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/cherry.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/cherry.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/cherry.png", 70);
			drawImages('canvasslot2', "images/bells-32.png",-25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/bells-32.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/bells-32.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/bells-32.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/bells-32.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/bells-32.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/bells-32.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/bells-32.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/bells-32.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/bells-32.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/bells-32.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/bells-32.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/bells-32.png", 35);
		 if(slot3 == 1){
			drawImages('canvasslot3', "images/lucky-seven.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/lucky-seven.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/lucky-seven.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/lucky-seven.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/lucky-seven.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/lucky-seven.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/lucky-seven.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/lucky-seven.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/lucky-seven.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/lucky-seven.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/lucky-seven.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/lucky-seven.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/lucky-seven.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);	
		} else if( slot3 == 2){
			drawImages('canvasslot3', "images/Slot_Grapes.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/Slot_Grapes.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/Slot_Grapes.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/Slot_Grapes.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/Slot_Grapes.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/Slot_Grapes.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/Slot_Grapes.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/Slot_Grapes.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/Slot_Grapes.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/Slot_Grapes.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/Slot_Grapes.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/Slot_Grapes.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/Slot_Grapes.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);				
		} else if(slot3 == 3){
			drawImages('canvasslot3', "images/clover.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/clover.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/clover.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/clover.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/clover.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/clover.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/clover.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/clover.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/clover.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/clover.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/clover.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/clover.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/clover.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);					
		}else if(slot3 == 4){
			drawImages('canvasslot3', "images/bells-32.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/bells-32.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/bells-32.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/bells-32.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/bells-32.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/bells-32.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/bells-32.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/bells-32.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/bells-32.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/bells-32.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/bells-32.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/bells-32.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/bells-32.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);				
		}else if(slot3 == 5){
			drawImages('canvasslot3', "images/cherry.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/cherry.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/cherry.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/cherry.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/cherry.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/cherry.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/cherry.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/cherry.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/cherry.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/cherry.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/cherry.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/cherry.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/cherry.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);					
		}
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																						
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																										
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																										
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																										
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);				
		}else if(slot2 == 5){
					drawImages('canvasslot2', "images/lucky-seven.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/lucky-seven.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/lucky-seven.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/lucky-seven.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/lucky-seven.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/lucky-seven.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/lucky-seven.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/lucky-seven.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/lucky-seven.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/lucky-seven.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/lucky-seven.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/lucky-seven.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/lucky-seven.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/lucky-seven.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/lucky-seven.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/lucky-seven.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/lucky-seven.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/lucky-seven.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/lucky-seven.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/lucky-seven.png", 70);
			drawImages('canvasslot2', "images/Slot_Grapes.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/Slot_Grapes.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/Slot_Grapes.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/Slot_Grapes.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/Slot_Grapes.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/Slot_Grapes.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/Slot_Grapes.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/Slot_Grapes.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/Slot_Grapes.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/Slot_Grapes.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/Slot_Grapes.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/Slot_Grapes.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/Slot_Grapes.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/Slot_Grapes.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/Slot_Grapes.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/Slot_Grapes.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/Slot_Grapes.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/Slot_Grapes.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/Slot_Grapes.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/Slot_Grapes.png", 70);
			drawImages('canvasslot2', "images/clover.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/clover.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/clover.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/clover.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/clover.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/clover.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/clover.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/clover.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/clover.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/clover.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/clover.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/clover.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/clover.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/clover.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/clover.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/clover.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/clover.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/clover.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/clover.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/clover.png", 70);
																						
			drawImages('canvasslot2', "images/bells-32.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/bells-32.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/bells-32.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/bells-32.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/bells-32.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/bells-32.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/bells-32.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/bells-32.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/bells-32.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/bells-32.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/bells-32.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/bells-32.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/bells-32.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/bells-32.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/bells-32.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/bells-32.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/bells-32.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/bells-32.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/bells-32.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/bells-32.png", 70);
				drawImages('canvasslot2', "images/cherry.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/cherry.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/cherry.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/cherry.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/cherry.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/cherry.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/cherry.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/cherry.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/cherry.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/cherry.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/cherry.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/cherry.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/cherry.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/cherry.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/cherry.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/cherry.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/cherry.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/cherry.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/cherry.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/cherry.png", 70);
			drawImages('canvasslot2', "images/cherry.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/cherry.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/cherry.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/cherry.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/cherry.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/cherry.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/cherry.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/cherry.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/cherry.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/cherry.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/cherry.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/cherry.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/cherry.png", 35);		
		 if(slot3 == 1){
			drawImages('canvasslot3', "images/lucky-seven.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/lucky-seven.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/lucky-seven.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/lucky-seven.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/lucky-seven.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/lucky-seven.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/lucky-seven.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/lucky-seven.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/lucky-seven.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/lucky-seven.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/lucky-seven.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/lucky-seven.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/lucky-seven.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);	
		} else if( slot3 == 2){
			drawImages('canvasslot3', "images/Slot_Grapes.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/Slot_Grapes.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/Slot_Grapes.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/Slot_Grapes.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/Slot_Grapes.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/Slot_Grapes.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/Slot_Grapes.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/Slot_Grapes.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/Slot_Grapes.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/Slot_Grapes.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/Slot_Grapes.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/Slot_Grapes.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/Slot_Grapes.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);				
		} else if(slot3 == 3){
			drawImages('canvasslot3', "images/clover.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/clover.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/clover.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/clover.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/clover.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/clover.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/clover.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/clover.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/clover.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/clover.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/clover.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/clover.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/clover.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);					
		}else if(slot3 == 4){
			drawImages('canvasslot3', "images/bells-32.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/bells-32.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/bells-32.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/bells-32.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/bells-32.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/bells-32.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/bells-32.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/bells-32.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/bells-32.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/bells-32.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/bells-32.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/bells-32.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/bells-32.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);				
		}else if(slot3 == 5){
			drawImages('canvasslot3', "images/cherry.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/cherry.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/cherry.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/cherry.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/cherry.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/cherry.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/cherry.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/cherry.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/cherry.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/cherry.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/cherry.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/cherry.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/cherry.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);					
		}
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																						
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																										
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																										
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																										
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);					
		}
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																						
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																										
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																										
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																										
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);			
		}else if(slot1 == 4){
	    			drawImages('canvasslot1', "images/lucky-seven.png", -25);
			setTimeout(function(){
            drawImages('canvasslot1', "images/lucky-seven.png", -20);
				setTimeout(function(){
					drawImages('canvasslot1', "images/lucky-seven.png", -15);
					setTimeout(function(){
						drawImages('canvasslot1', "images/lucky-seven.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot1', "images/lucky-seven.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot1', "images/lucky-seven.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot1', "images/lucky-seven.png", 5);
									setTimeout(function(){
										drawImages('canvasslot1', "images/lucky-seven.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot1', "images/lucky-seven.png", 15);
											setTimeout(function(){
												drawImages('canvasslot1', "images/lucky-seven.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot1', "images/lucky-seven.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot1', "images/lucky-seven.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot1', "images/lucky-seven.png", 35);
															setTimeout(function(){
																drawImages('canvasslot1', "images/lucky-seven.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot1', "images/lucky-seven.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot1', "images/lucky-seven.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot1', "images/lucky-seven.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot1', "images/lucky-seven.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot1', "images/lucky-seven.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot1', "images/lucky-seven.png", 70);
			drawImages('canvasslot1', "images/Slot_Grapes.png", -25);
			setTimeout(function(){
            drawImages('canvasslot1', "images/Slot_Grapes.png", -20);
				setTimeout(function(){
					drawImages('canvasslot1', "images/Slot_Grapes.png", -15);
					setTimeout(function(){
						drawImages('canvasslot1', "images/Slot_Grapes.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot1', "images/Slot_Grapes.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot1', "images/Slot_Grapes.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot1', "images/Slot_Grapes.png", 5);
									setTimeout(function(){
										drawImages('canvasslot1', "images/Slot_Grapes.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot1', "images/Slot_Grapes.png", 15);
											setTimeout(function(){
												drawImages('canvasslot1', "images/Slot_Grapes.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot1', "images/Slot_Grapes.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot1', "images/Slot_Grapes.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot1', "images/Slot_Grapes.png", 35);
															setTimeout(function(){
																drawImages('canvasslot1', "images/Slot_Grapes.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot1', "images/Slot_Grapes.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot1', "images/Slot_Grapes.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot1', "images/Slot_Grapes.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot1', "images/Slot_Grapes.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot1', "images/Slot_Grapes.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot1', "images/Slot_Grapes.png", 70);
			drawImages('canvasslot1', "images/clover.png", -25);
			setTimeout(function(){
            drawImages('canvasslot1', "images/clover.png", -20);
				setTimeout(function(){
					drawImages('canvasslot1', "images/clover.png", -15);
					setTimeout(function(){
						drawImages('canvasslot1', "images/clover.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot1', "images/clover.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot1', "images/clover.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot1', "images/clover.png", 5);
									setTimeout(function(){
										drawImages('canvasslot1', "images/clover.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot1', "images/clover.png", 15);
											setTimeout(function(){
												drawImages('canvasslot1', "images/clover.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot1', "images/clover.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot1', "images/clover.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot1', "images/clover.png", 35);
															setTimeout(function(){
																drawImages('canvasslot1', "images/clover.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot1', "images/clover.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot1', "images/clover.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot1', "images/clover.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot1', "images/clover.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot1', "images/clover.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot1', "images/clover.png", 70);
			drawImages('canvasslot1', "images/bells-32.png", -25);
			setTimeout(function(){
            drawImages('canvasslot1', "images/bells-32.png", -20);
				setTimeout(function(){
					drawImages('canvasslot1', "images/bells-32.png", -15);
					setTimeout(function(){
						drawImages('canvasslot1', "images/bells-32.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot1', "images/bells-32.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot1', "images/bells-32.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot1', "images/bells-32.png", 5);
									setTimeout(function(){
										drawImages('canvasslot1', "images/bells-32.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot1', "images/bells-32.png", 15);
											setTimeout(function(){
												drawImages('canvasslot1', "images/bells-32.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot1', "images/bells-32.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot1', "images/bells-32.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot1', "images/bells-32.png", 35);
															setTimeout(function(){
																drawImages('canvasslot1', "images/bells-32.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot1', "images/bells-32.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot1', "images/bells-32.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot1', "images/bells-32.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot1', "images/bells-32.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot1', "images/bells-32.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot1', "images/bells-32.png", 70);
				drawImages('canvasslot1', "images/cherry.png", -25);
			setTimeout(function(){
            drawImages('canvasslot1', "images/cherry.png", -20);
				setTimeout(function(){
					drawImages('canvasslot1', "images/cherry.png", -15);
					setTimeout(function(){
						drawImages('canvasslot1', "images/cherry.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot1', "images/cherry.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot1', "images/cherry.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot1', "images/cherry.png", 5);
									setTimeout(function(){
										drawImages('canvasslot1', "images/cherry.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot1', "images/cherry.png", 15);
											setTimeout(function(){
												drawImages('canvasslot1', "images/cherry.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot1', "images/cherry.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot1', "images/cherry.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot1', "images/cherry.png", 35);
															setTimeout(function(){
																drawImages('canvasslot1', "images/cherry.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot1', "images/cherry.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot1', "images/cherry.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot1', "images/cherry.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot1', "images/cherry.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot1', "images/cherry.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot1', "images/cherry.png", 70);
																						//-------------
																						
			drawImages('canvasslot1', "images/bells-32.png", -25);
			setTimeout(function(){
            drawImages('canvasslot1', "images/bells-32.png", -20);
				setTimeout(function(){
					drawImages('canvasslot1', "images/bells-32.png", -15);
					setTimeout(function(){
						drawImages('canvasslot1', "images/bells-32.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot1', "images/bells-32.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot1', "images/bells-32.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot1', "images/bells-32.png", 5);
									setTimeout(function(){
										drawImages('canvasslot1', "images/bells-32.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot1', "images/bells-32.png", 15);
											setTimeout(function(){
												drawImages('canvasslot1', "images/bells-32.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot1', "images/bells-32.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot1', "images/bells-32.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot1', "images/bells-32.png", 35);	
		if(slot2 == 1){
					drawImages('canvasslot2', "images/lucky-seven.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/lucky-seven.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/lucky-seven.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/lucky-seven.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/lucky-seven.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/lucky-seven.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/lucky-seven.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/lucky-seven.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/lucky-seven.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/lucky-seven.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/lucky-seven.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/lucky-seven.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/lucky-seven.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/lucky-seven.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/lucky-seven.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/lucky-seven.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/lucky-seven.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/lucky-seven.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/lucky-seven.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/lucky-seven.png", 70);
			drawImages('canvasslot2', "images/Slot_Grapes.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/Slot_Grapes.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/Slot_Grapes.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/Slot_Grapes.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/Slot_Grapes.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/Slot_Grapes.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/Slot_Grapes.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/Slot_Grapes.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/Slot_Grapes.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/Slot_Grapes.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/Slot_Grapes.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/Slot_Grapes.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/Slot_Grapes.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/Slot_Grapes.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/Slot_Grapes.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/Slot_Grapes.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/Slot_Grapes.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/Slot_Grapes.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/Slot_Grapes.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/Slot_Grapes.png", 70);
			drawImages('canvasslot2', "images/clover.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/clover.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/clover.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/clover.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/clover.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/clover.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/clover.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/clover.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/clover.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/clover.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/clover.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/clover.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/clover.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/clover.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/clover.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/clover.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/clover.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/clover.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/clover.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/clover.png", 70);
																						
			drawImages('canvasslot2', "images/bells-32.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/bells-32.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/bells-32.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/bells-32.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/bells-32.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/bells-32.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/bells-32.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/bells-32.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/bells-32.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/bells-32.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/bells-32.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/bells-32.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/bells-32.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/bells-32.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/bells-32.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/bells-32.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/bells-32.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/bells-32.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/bells-32.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/bells-32.png", 70);
				drawImages('canvasslot2', "images/cherry.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/cherry.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/cherry.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/cherry.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/cherry.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/cherry.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/cherry.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/cherry.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/cherry.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/cherry.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/cherry.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/cherry.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/cherry.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/cherry.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/cherry.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/cherry.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/cherry.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/cherry.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/cherry.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/cherry.png", 70);
			drawImages('canvasslot2', "images/lucky-seven.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/lucky-seven.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/lucky-seven.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/lucky-seven.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/lucky-seven.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/lucky-seven.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/lucky-seven.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/lucky-seven.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/lucky-seven.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/lucky-seven.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/lucky-seven.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/lucky-seven.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/lucky-seven.png", 35);
		 if(slot3 == 1){
			drawImages('canvasslot3', "images/lucky-seven.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/lucky-seven.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/lucky-seven.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/lucky-seven.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/lucky-seven.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/lucky-seven.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/lucky-seven.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/lucky-seven.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/lucky-seven.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/lucky-seven.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/lucky-seven.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/lucky-seven.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/lucky-seven.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);	
		} else if( slot3 == 2){
			drawImages('canvasslot3', "images/Slot_Grapes.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/Slot_Grapes.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/Slot_Grapes.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/Slot_Grapes.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/Slot_Grapes.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/Slot_Grapes.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/Slot_Grapes.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/Slot_Grapes.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/Slot_Grapes.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/Slot_Grapes.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/Slot_Grapes.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/Slot_Grapes.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/Slot_Grapes.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);				
		} else if(slot3 == 3){
			drawImages('canvasslot3', "images/clover.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/clover.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/clover.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/clover.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/clover.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/clover.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/clover.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/clover.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/clover.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/clover.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/clover.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/clover.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/clover.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);					
		}else if(slot3 == 4){
			drawImages('canvasslot3', "images/bells-32.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/bells-32.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/bells-32.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/bells-32.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/bells-32.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/bells-32.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/bells-32.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/bells-32.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/bells-32.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/bells-32.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/bells-32.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/bells-32.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/bells-32.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);				
		}else if(slot3 == 5){
			drawImages('canvasslot3', "images/cherry.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/cherry.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/cherry.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/cherry.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/cherry.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/cherry.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/cherry.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/cherry.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/cherry.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/cherry.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/cherry.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/cherry.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/cherry.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);					
		}
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																						
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																										
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																										
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																										
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);			
		} else if( slot2 == 2){
					drawImages('canvasslot2', "images/lucky-seven.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/lucky-seven.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/lucky-seven.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/lucky-seven.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/lucky-seven.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/lucky-seven.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/lucky-seven.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/lucky-seven.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/lucky-seven.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/lucky-seven.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/lucky-seven.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/lucky-seven.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/lucky-seven.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/lucky-seven.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/lucky-seven.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/lucky-seven.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/lucky-seven.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/lucky-seven.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/lucky-seven.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/lucky-seven.png", 70);
			drawImages('canvasslot2', "images/Slot_Grapes.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/Slot_Grapes.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/Slot_Grapes.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/Slot_Grapes.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/Slot_Grapes.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/Slot_Grapes.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/Slot_Grapes.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/Slot_Grapes.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/Slot_Grapes.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/Slot_Grapes.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/Slot_Grapes.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/Slot_Grapes.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/Slot_Grapes.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/Slot_Grapes.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/Slot_Grapes.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/Slot_Grapes.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/Slot_Grapes.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/Slot_Grapes.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/Slot_Grapes.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/Slot_Grapes.png", 70);
			drawImages('canvasslot2', "images/clover.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/clover.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/clover.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/clover.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/clover.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/clover.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/clover.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/clover.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/clover.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/clover.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/clover.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/clover.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/clover.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/clover.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/clover.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/clover.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/clover.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/clover.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/clover.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/clover.png", 70);
																						
			drawImages('canvasslot2', "images/bells-32.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/bells-32.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/bells-32.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/bells-32.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/bells-32.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/bells-32.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/bells-32.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/bells-32.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/bells-32.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/bells-32.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/bells-32.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/bells-32.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/bells-32.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/bells-32.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/bells-32.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/bells-32.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/bells-32.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/bells-32.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/bells-32.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/bells-32.png", 70);
				drawImages('canvasslot2', "images/cherry.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/cherry.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/cherry.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/cherry.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/cherry.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/cherry.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/cherry.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/cherry.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/cherry.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/cherry.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/cherry.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/cherry.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/cherry.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/cherry.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/cherry.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/cherry.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/cherry.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/cherry.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/cherry.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/cherry.png", 70);
			drawImages('canvasslot2', "images/Slot_Grapes.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/Slot_Grapes.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/Slot_Grapes.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/Slot_Grapes.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/Slot_Grapes.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/Slot_Grapes.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/Slot_Grapes.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/Slot_Grapes.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/Slot_Grapes.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/Slot_Grapes.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/Slot_Grapes.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/Slot_Grapes.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/Slot_Grapes.png", 35);	
		 if(slot3 == 1){
			drawImages('canvasslot3', "images/lucky-seven.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/lucky-seven.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/lucky-seven.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/lucky-seven.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/lucky-seven.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/lucky-seven.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/lucky-seven.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/lucky-seven.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/lucky-seven.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/lucky-seven.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/lucky-seven.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/lucky-seven.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/lucky-seven.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);	
		} else if( slot3 == 2){
			drawImages('canvasslot3', "images/Slot_Grapes.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/Slot_Grapes.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/Slot_Grapes.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/Slot_Grapes.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/Slot_Grapes.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/Slot_Grapes.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/Slot_Grapes.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/Slot_Grapes.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/Slot_Grapes.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/Slot_Grapes.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/Slot_Grapes.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/Slot_Grapes.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/Slot_Grapes.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);				
		} else if(slot3 == 3){
			drawImages('canvasslot3', "images/clover.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/clover.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/clover.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/clover.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/clover.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/clover.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/clover.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/clover.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/clover.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/clover.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/clover.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/clover.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/clover.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);					
		}else if(slot3 == 4){
			drawImages('canvasslot3', "images/bells-32.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/bells-32.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/bells-32.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/bells-32.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/bells-32.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/bells-32.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/bells-32.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/bells-32.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/bells-32.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/bells-32.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/bells-32.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/bells-32.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/bells-32.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);				
		}else if(slot3 == 5){
			drawImages('canvasslot3', "images/cherry.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/cherry.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/cherry.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/cherry.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/cherry.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/cherry.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/cherry.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/cherry.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/cherry.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/cherry.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/cherry.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/cherry.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/cherry.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);					
		}
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																						
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																										
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																										
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																										
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);				
		} else if(slot2 == 3){
					drawImages('canvasslot2', "images/lucky-seven.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/lucky-seven.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/lucky-seven.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/lucky-seven.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/lucky-seven.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/lucky-seven.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/lucky-seven.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/lucky-seven.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/lucky-seven.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/lucky-seven.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/lucky-seven.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/lucky-seven.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/lucky-seven.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/lucky-seven.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/lucky-seven.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/lucky-seven.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/lucky-seven.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/lucky-seven.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/lucky-seven.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/lucky-seven.png", 70);
			drawImages('canvasslot2', "images/Slot_Grapes.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/Slot_Grapes.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/Slot_Grapes.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/Slot_Grapes.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/Slot_Grapes.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/Slot_Grapes.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/Slot_Grapes.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/Slot_Grapes.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/Slot_Grapes.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/Slot_Grapes.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/Slot_Grapes.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/Slot_Grapes.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/Slot_Grapes.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/Slot_Grapes.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/Slot_Grapes.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/Slot_Grapes.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/Slot_Grapes.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/Slot_Grapes.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/Slot_Grapes.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/Slot_Grapes.png", 70);
			drawImages('canvasslot2', "images/clover.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/clover.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/clover.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/clover.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/clover.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/clover.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/clover.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/clover.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/clover.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/clover.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/clover.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/clover.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/clover.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/clover.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/clover.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/clover.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/clover.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/clover.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/clover.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/clover.png", 70);
																						
			drawImages('canvasslot2', "images/bells-32.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/bells-32.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/bells-32.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/bells-32.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/bells-32.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/bells-32.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/bells-32.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/bells-32.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/bells-32.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/bells-32.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/bells-32.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/bells-32.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/bells-32.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/bells-32.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/bells-32.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/bells-32.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/bells-32.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/bells-32.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/bells-32.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/bells-32.png", 70);
				drawImages('canvasslot2', "images/cherry.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/cherry.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/cherry.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/cherry.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/cherry.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/cherry.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/cherry.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/cherry.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/cherry.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/cherry.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/cherry.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/cherry.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/cherry.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/cherry.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/cherry.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/cherry.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/cherry.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/cherry.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/cherry.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/cherry.png", 70);
			drawImages('canvasslot2', "images/clover.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/clover.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/clover.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/clover.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/clover.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/clover.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/clover.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/clover.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/clover.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/clover.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/clover.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/clover.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/clover.png", 35);	
		 if(slot3 == 1){
			drawImages('canvasslot3', "images/lucky-seven.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/lucky-seven.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/lucky-seven.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/lucky-seven.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/lucky-seven.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/lucky-seven.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/lucky-seven.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/lucky-seven.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/lucky-seven.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/lucky-seven.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/lucky-seven.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/lucky-seven.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/lucky-seven.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);	
		} else if( slot3 == 2){
			drawImages('canvasslot3', "images/Slot_Grapes.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/Slot_Grapes.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/Slot_Grapes.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/Slot_Grapes.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/Slot_Grapes.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/Slot_Grapes.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/Slot_Grapes.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/Slot_Grapes.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/Slot_Grapes.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/Slot_Grapes.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/Slot_Grapes.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/Slot_Grapes.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/Slot_Grapes.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);				
		} else if(slot3 == 3){
			drawImages('canvasslot3', "images/clover.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/clover.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/clover.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/clover.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/clover.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/clover.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/clover.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/clover.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/clover.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/clover.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/clover.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/clover.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/clover.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);					
		}else if(slot3 == 4){
			drawImages('canvasslot3', "images/bells-32.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/bells-32.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/bells-32.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/bells-32.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/bells-32.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/bells-32.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/bells-32.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/bells-32.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/bells-32.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/bells-32.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/bells-32.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/bells-32.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/bells-32.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);				
		}else if(slot3 == 5){
			drawImages('canvasslot3', "images/cherry.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/cherry.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/cherry.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/cherry.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/cherry.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/cherry.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/cherry.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/cherry.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/cherry.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/cherry.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/cherry.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/cherry.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/cherry.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);					
		}
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																						
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																										
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																										
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																										
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);						
		}else if(slot2 == 4){
					drawImages('canvasslot2', "images/lucky-seven.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/lucky-seven.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/lucky-seven.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/lucky-seven.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/lucky-seven.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/lucky-seven.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/lucky-seven.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/lucky-seven.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/lucky-seven.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/lucky-seven.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/lucky-seven.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/lucky-seven.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/lucky-seven.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/lucky-seven.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/lucky-seven.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/lucky-seven.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/lucky-seven.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/lucky-seven.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/lucky-seven.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/lucky-seven.png", 70);
			drawImages('canvasslot2', "images/Slot_Grapes.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/Slot_Grapes.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/Slot_Grapes.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/Slot_Grapes.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/Slot_Grapes.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/Slot_Grapes.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/Slot_Grapes.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/Slot_Grapes.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/Slot_Grapes.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/Slot_Grapes.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/Slot_Grapes.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/Slot_Grapes.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/Slot_Grapes.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/Slot_Grapes.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/Slot_Grapes.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/Slot_Grapes.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/Slot_Grapes.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/Slot_Grapes.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/Slot_Grapes.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/Slot_Grapes.png", 70);
			drawImages('canvasslot2', "images/clover.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/clover.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/clover.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/clover.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/clover.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/clover.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/clover.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/clover.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/clover.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/clover.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/clover.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/clover.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/clover.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/clover.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/clover.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/clover.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/clover.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/clover.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/clover.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/clover.png", 70);
																						
			drawImages('canvasslot2', "images/bells-32.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/bells-32.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/bells-32.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/bells-32.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/bells-32.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/bells-32.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/bells-32.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/bells-32.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/bells-32.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/bells-32.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/bells-32.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/bells-32.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/bells-32.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/bells-32.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/bells-32.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/bells-32.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/bells-32.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/bells-32.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/bells-32.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/bells-32.png", 70);
				drawImages('canvasslot2', "images/cherry.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/cherry.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/cherry.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/cherry.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/cherry.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/cherry.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/cherry.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/cherry.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/cherry.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/cherry.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/cherry.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/cherry.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/cherry.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/cherry.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/cherry.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/cherry.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/cherry.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/cherry.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/cherry.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/cherry.png", 70);
			drawImages('canvasslot2', "images/bells-32.png",-25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/bells-32.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/bells-32.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/bells-32.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/bells-32.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/bells-32.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/bells-32.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/bells-32.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/bells-32.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/bells-32.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/bells-32.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/bells-32.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/bells-32.png", 35);	
		 if(slot3 == 1){
			drawImages('canvasslot3', "images/lucky-seven.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/lucky-seven.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/lucky-seven.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/lucky-seven.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/lucky-seven.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/lucky-seven.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/lucky-seven.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/lucky-seven.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/lucky-seven.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/lucky-seven.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/lucky-seven.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/lucky-seven.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/lucky-seven.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);	
		} else if( slot3 == 2){
			drawImages('canvasslot3', "images/Slot_Grapes.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/Slot_Grapes.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/Slot_Grapes.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/Slot_Grapes.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/Slot_Grapes.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/Slot_Grapes.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/Slot_Grapes.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/Slot_Grapes.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/Slot_Grapes.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/Slot_Grapes.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/Slot_Grapes.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/Slot_Grapes.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/Slot_Grapes.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);				
		} else if(slot3 == 3){
			drawImages('canvasslot3', "images/clover.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/clover.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/clover.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/clover.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/clover.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/clover.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/clover.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/clover.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/clover.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/clover.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/clover.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/clover.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/clover.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);					
		}else if(slot3 == 4){
			drawImages('canvasslot3', "images/bells-32.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/bells-32.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/bells-32.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/bells-32.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/bells-32.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/bells-32.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/bells-32.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/bells-32.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/bells-32.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/bells-32.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/bells-32.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/bells-32.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/bells-32.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);				
		}else if(slot3 == 5){
			drawImages('canvasslot3', "images/cherry.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/cherry.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/cherry.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/cherry.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/cherry.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/cherry.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/cherry.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/cherry.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/cherry.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/cherry.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/cherry.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/cherry.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/cherry.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);					
		}
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																						
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																										
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																										
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																										
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);		
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);				
		}else if(slot2 == 5){
					drawImages('canvasslot2', "images/lucky-seven.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/lucky-seven.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/lucky-seven.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/lucky-seven.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/lucky-seven.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/lucky-seven.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/lucky-seven.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/lucky-seven.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/lucky-seven.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/lucky-seven.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/lucky-seven.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/lucky-seven.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/lucky-seven.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/lucky-seven.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/lucky-seven.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/lucky-seven.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/lucky-seven.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/lucky-seven.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/lucky-seven.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/lucky-seven.png", 70);
			drawImages('canvasslot2', "images/Slot_Grapes.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/Slot_Grapes.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/Slot_Grapes.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/Slot_Grapes.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/Slot_Grapes.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/Slot_Grapes.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/Slot_Grapes.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/Slot_Grapes.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/Slot_Grapes.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/Slot_Grapes.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/Slot_Grapes.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/Slot_Grapes.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/Slot_Grapes.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/Slot_Grapes.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/Slot_Grapes.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/Slot_Grapes.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/Slot_Grapes.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/Slot_Grapes.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/Slot_Grapes.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/Slot_Grapes.png", 70);
			drawImages('canvasslot2', "images/clover.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/clover.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/clover.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/clover.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/clover.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/clover.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/clover.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/clover.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/clover.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/clover.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/clover.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/clover.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/clover.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/clover.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/clover.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/clover.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/clover.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/clover.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/clover.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/clover.png", 70);
																						
			drawImages('canvasslot2', "images/bells-32.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/bells-32.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/bells-32.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/bells-32.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/bells-32.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/bells-32.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/bells-32.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/bells-32.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/bells-32.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/bells-32.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/bells-32.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/bells-32.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/bells-32.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/bells-32.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/bells-32.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/bells-32.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/bells-32.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/bells-32.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/bells-32.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/bells-32.png", 70);
				drawImages('canvasslot2', "images/cherry.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/cherry.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/cherry.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/cherry.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/cherry.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/cherry.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/cherry.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/cherry.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/cherry.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/cherry.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/cherry.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/cherry.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/cherry.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/cherry.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/cherry.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/cherry.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/cherry.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/cherry.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/cherry.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/cherry.png", 70);
			drawImages('canvasslot2', "images/cherry.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/cherry.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/cherry.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/cherry.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/cherry.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/cherry.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/cherry.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/cherry.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/cherry.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/cherry.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/cherry.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/cherry.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/cherry.png", 35);	
		 if(slot3 == 1){
			drawImages('canvasslot3', "images/lucky-seven.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/lucky-seven.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/lucky-seven.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/lucky-seven.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/lucky-seven.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/lucky-seven.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/lucky-seven.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/lucky-seven.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/lucky-seven.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/lucky-seven.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/lucky-seven.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/lucky-seven.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/lucky-seven.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);	
		} else if( slot3 == 2){
			drawImages('canvasslot3', "images/Slot_Grapes.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/Slot_Grapes.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/Slot_Grapes.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/Slot_Grapes.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/Slot_Grapes.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/Slot_Grapes.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/Slot_Grapes.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/Slot_Grapes.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/Slot_Grapes.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/Slot_Grapes.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/Slot_Grapes.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/Slot_Grapes.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/Slot_Grapes.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);				
		} else if(slot3 == 3){
			drawImages('canvasslot3', "images/clover.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/clover.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/clover.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/clover.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/clover.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/clover.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/clover.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/clover.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/clover.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/clover.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/clover.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/clover.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/clover.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);					
		}else if(slot3 == 4){
			drawImages('canvasslot3', "images/bells-32.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/bells-32.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/bells-32.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/bells-32.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/bells-32.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/bells-32.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/bells-32.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/bells-32.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/bells-32.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/bells-32.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/bells-32.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/bells-32.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/bells-32.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);				
		}else if(slot3 == 5){
			drawImages('canvasslot3', "images/cherry.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/cherry.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/cherry.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/cherry.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/cherry.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/cherry.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/cherry.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/cherry.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/cherry.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/cherry.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/cherry.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/cherry.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/cherry.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);					
		}
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																						
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																										
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																										
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																										
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);					
		}
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																						
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																										
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																										
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																										
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);		
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);					
		}else if(slot1 == 5){
						drawImages('canvasslot1', "images/lucky-seven.png", -25);
			setTimeout(function(){
            drawImages('canvasslot1', "images/lucky-seven.png", -20);
				setTimeout(function(){
					drawImages('canvasslot1', "images/lucky-seven.png", -15);
					setTimeout(function(){
						drawImages('canvasslot1', "images/lucky-seven.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot1', "images/lucky-seven.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot1', "images/lucky-seven.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot1', "images/lucky-seven.png", 5);
									setTimeout(function(){
										drawImages('canvasslot1', "images/lucky-seven.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot1', "images/lucky-seven.png", 15);
											setTimeout(function(){
												drawImages('canvasslot1', "images/lucky-seven.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot1', "images/lucky-seven.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot1', "images/lucky-seven.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot1', "images/lucky-seven.png", 35);
															setTimeout(function(){
																drawImages('canvasslot1', "images/lucky-seven.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot1', "images/lucky-seven.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot1', "images/lucky-seven.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot1', "images/lucky-seven.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot1', "images/lucky-seven.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot1', "images/lucky-seven.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot1', "images/lucky-seven.png", 70);
			drawImages('canvasslot1', "images/Slot_Grapes.png", -25);
			setTimeout(function(){
            drawImages('canvasslot1', "images/Slot_Grapes.png", -20);
				setTimeout(function(){
					drawImages('canvasslot1', "images/Slot_Grapes.png", -15);
					setTimeout(function(){
						drawImages('canvasslot1', "images/Slot_Grapes.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot1', "images/Slot_Grapes.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot1', "images/Slot_Grapes.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot1', "images/Slot_Grapes.png", 5);
									setTimeout(function(){
										drawImages('canvasslot1', "images/Slot_Grapes.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot1', "images/Slot_Grapes.png", 15);
											setTimeout(function(){
												drawImages('canvasslot1', "images/Slot_Grapes.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot1', "images/Slot_Grapes.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot1', "images/Slot_Grapes.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot1', "images/Slot_Grapes.png", 35);
															setTimeout(function(){
																drawImages('canvasslot1', "images/Slot_Grapes.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot1', "images/Slot_Grapes.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot1', "images/Slot_Grapes.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot1', "images/Slot_Grapes.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot1', "images/Slot_Grapes.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot1', "images/Slot_Grapes.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot1', "images/Slot_Grapes.png", 70);
			drawImages('canvasslot1', "images/clover.png", -25);
			setTimeout(function(){
            drawImages('canvasslot1', "images/clover.png", -20);
				setTimeout(function(){
					drawImages('canvasslot1', "images/clover.png", -15);
					setTimeout(function(){
						drawImages('canvasslot1', "images/clover.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot1', "images/clover.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot1', "images/clover.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot1', "images/clover.png", 5);
									setTimeout(function(){
										drawImages('canvasslot1', "images/clover.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot1', "images/clover.png", 15);
											setTimeout(function(){
												drawImages('canvasslot1', "images/clover.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot1', "images/clover.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot1', "images/clover.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot1', "images/clover.png", 35);
															setTimeout(function(){
																drawImages('canvasslot1', "images/clover.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot1', "images/clover.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot1', "images/clover.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot1', "images/clover.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot1', "images/clover.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot1', "images/clover.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot1', "images/clover.png", 70);
			drawImages('canvasslot1', "images/bells-32.png", -25);
			setTimeout(function(){
            drawImages('canvasslot1', "images/bells-32.png", -20);
				setTimeout(function(){
					drawImages('canvasslot1', "images/bells-32.png", -15);
					setTimeout(function(){
						drawImages('canvasslot1', "images/bells-32.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot1', "images/bells-32.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot1', "images/bells-32.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot1', "images/bells-32.png", 5);
									setTimeout(function(){
										drawImages('canvasslot1', "images/bells-32.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot1', "images/bells-32.png", 15);
											setTimeout(function(){
												drawImages('canvasslot1', "images/bells-32.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot1', "images/bells-32.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot1', "images/bells-32.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot1', "images/bells-32.png", 35);
															setTimeout(function(){
																drawImages('canvasslot1', "images/bells-32.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot1', "images/bells-32.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot1', "images/bells-32.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot1', "images/bells-32.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot1', "images/bells-32.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot1', "images/bells-32.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot1', "images/bells-32.png", 70);
				drawImages('canvasslot1', "images/cherry.png", -25);
			setTimeout(function(){
            drawImages('canvasslot1', "images/cherry.png", -20);
				setTimeout(function(){
					drawImages('canvasslot1', "images/cherry.png", -15);
					setTimeout(function(){
						drawImages('canvasslot1', "images/cherry.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot1', "images/cherry.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot1', "images/cherry.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot1', "images/cherry.png", 5);
									setTimeout(function(){
										drawImages('canvasslot1', "images/cherry.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot1', "images/cherry.png", 15);
											setTimeout(function(){
												drawImages('canvasslot1', "images/cherry.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot1', "images/cherry.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot1', "images/cherry.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot1', "images/cherry.png", 35);
															setTimeout(function(){
																drawImages('canvasslot1', "images/cherry.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot1', "images/cherry.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot1', "images/cherry.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot1', "images/cherry.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot1', "images/cherry.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot1', "images/cherry.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot1', "images/cherry.png", 70);
																						//-------------------
																						
			drawImages('canvasslot1', "images/cherry.png", -25);
			setTimeout(function(){
            drawImages('canvasslot1', "images/cherry.png", -20);
				setTimeout(function(){
					drawImages('canvasslot1', "images/cherry.png", -15);
					setTimeout(function(){
						drawImages('canvasslot1', "images/cherry.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot1', "images/cherry.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot1', "images/cherry.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot1', "images/cherry.png", 5);
									setTimeout(function(){
										drawImages('canvasslot1', "images/cherry.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot1', "images/cherry.png", 15);
											setTimeout(function(){
												drawImages('canvasslot1', "images/cherry.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot1', "images/cherry.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot1', "images/cherry.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot1', "images/cherry.png", 35);	
		if(slot2 == 1){
					drawImages('canvasslot2', "images/lucky-seven.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/lucky-seven.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/lucky-seven.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/lucky-seven.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/lucky-seven.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/lucky-seven.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/lucky-seven.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/lucky-seven.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/lucky-seven.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/lucky-seven.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/lucky-seven.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/lucky-seven.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/lucky-seven.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/lucky-seven.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/lucky-seven.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/lucky-seven.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/lucky-seven.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/lucky-seven.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/lucky-seven.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/lucky-seven.png", 70);
			drawImages('canvasslot2', "images/Slot_Grapes.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/Slot_Grapes.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/Slot_Grapes.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/Slot_Grapes.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/Slot_Grapes.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/Slot_Grapes.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/Slot_Grapes.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/Slot_Grapes.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/Slot_Grapes.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/Slot_Grapes.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/Slot_Grapes.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/Slot_Grapes.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/Slot_Grapes.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/Slot_Grapes.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/Slot_Grapes.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/Slot_Grapes.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/Slot_Grapes.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/Slot_Grapes.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/Slot_Grapes.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/Slot_Grapes.png", 70);
			drawImages('canvasslot2', "images/clover.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/clover.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/clover.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/clover.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/clover.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/clover.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/clover.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/clover.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/clover.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/clover.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/clover.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/clover.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/clover.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/clover.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/clover.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/clover.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/clover.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/clover.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/clover.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/clover.png", 70);
																						
			drawImages('canvasslot2', "images/bells-32.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/bells-32.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/bells-32.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/bells-32.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/bells-32.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/bells-32.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/bells-32.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/bells-32.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/bells-32.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/bells-32.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/bells-32.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/bells-32.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/bells-32.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/bells-32.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/bells-32.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/bells-32.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/bells-32.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/bells-32.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/bells-32.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/bells-32.png", 70);
				drawImages('canvasslot2', "images/cherry.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/cherry.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/cherry.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/cherry.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/cherry.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/cherry.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/cherry.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/cherry.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/cherry.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/cherry.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/cherry.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/cherry.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/cherry.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/cherry.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/cherry.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/cherry.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/cherry.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/cherry.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/cherry.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/cherry.png", 70);
			drawImages('canvasslot2', "images/lucky-seven.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/lucky-seven.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/lucky-seven.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/lucky-seven.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/lucky-seven.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/lucky-seven.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/lucky-seven.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/lucky-seven.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/lucky-seven.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/lucky-seven.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/lucky-seven.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/lucky-seven.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/lucky-seven.png", 35);
		 if(slot3 == 1){
			drawImages('canvasslot3', "images/lucky-seven.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/lucky-seven.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/lucky-seven.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/lucky-seven.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/lucky-seven.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/lucky-seven.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/lucky-seven.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/lucky-seven.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/lucky-seven.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/lucky-seven.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/lucky-seven.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/lucky-seven.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/lucky-seven.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);	
		} else if( slot3 == 2){
			drawImages('canvasslot3', "images/Slot_Grapes.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/Slot_Grapes.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/Slot_Grapes.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/Slot_Grapes.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/Slot_Grapes.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/Slot_Grapes.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/Slot_Grapes.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/Slot_Grapes.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/Slot_Grapes.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/Slot_Grapes.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/Slot_Grapes.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/Slot_Grapes.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/Slot_Grapes.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);				
		} else if(slot3 == 3){
			drawImages('canvasslot3', "images/clover.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/clover.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/clover.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/clover.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/clover.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/clover.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/clover.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/clover.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/clover.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/clover.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/clover.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/clover.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/clover.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);					
		}else if(slot3 == 4){
			drawImages('canvasslot3', "images/bells-32.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/bells-32.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/bells-32.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/bells-32.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/bells-32.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/bells-32.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/bells-32.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/bells-32.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/bells-32.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/bells-32.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/bells-32.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/bells-32.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/bells-32.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);				
		}else if(slot3 == 5){
			drawImages('canvasslot3', "images/cherry.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/cherry.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/cherry.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/cherry.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/cherry.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/cherry.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/cherry.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/cherry.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/cherry.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/cherry.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/cherry.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/cherry.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/cherry.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);					
		}
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																						
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																										
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																										
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																										
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);			
		} else if( slot2 == 2){
					drawImages('canvasslot2', "images/lucky-seven.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/lucky-seven.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/lucky-seven.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/lucky-seven.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/lucky-seven.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/lucky-seven.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/lucky-seven.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/lucky-seven.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/lucky-seven.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/lucky-seven.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/lucky-seven.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/lucky-seven.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/lucky-seven.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/lucky-seven.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/lucky-seven.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/lucky-seven.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/lucky-seven.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/lucky-seven.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/lucky-seven.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/lucky-seven.png", 70);
			drawImages('canvasslot2', "images/Slot_Grapes.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/Slot_Grapes.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/Slot_Grapes.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/Slot_Grapes.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/Slot_Grapes.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/Slot_Grapes.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/Slot_Grapes.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/Slot_Grapes.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/Slot_Grapes.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/Slot_Grapes.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/Slot_Grapes.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/Slot_Grapes.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/Slot_Grapes.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/Slot_Grapes.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/Slot_Grapes.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/Slot_Grapes.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/Slot_Grapes.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/Slot_Grapes.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/Slot_Grapes.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/Slot_Grapes.png", 70);
			drawImages('canvasslot2', "images/clover.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/clover.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/clover.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/clover.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/clover.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/clover.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/clover.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/clover.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/clover.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/clover.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/clover.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/clover.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/clover.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/clover.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/clover.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/clover.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/clover.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/clover.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/clover.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/clover.png", 70);
																						
			drawImages('canvasslot2', "images/bells-32.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/bells-32.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/bells-32.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/bells-32.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/bells-32.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/bells-32.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/bells-32.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/bells-32.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/bells-32.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/bells-32.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/bells-32.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/bells-32.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/bells-32.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/bells-32.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/bells-32.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/bells-32.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/bells-32.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/bells-32.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/bells-32.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/bells-32.png", 70);
				drawImages('canvasslot2', "images/cherry.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/cherry.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/cherry.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/cherry.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/cherry.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/cherry.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/cherry.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/cherry.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/cherry.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/cherry.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/cherry.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/cherry.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/cherry.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/cherry.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/cherry.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/cherry.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/cherry.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/cherry.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/cherry.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/cherry.png", 70);
			drawImages('canvasslot2', "images/Slot_Grapes.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/Slot_Grapes.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/Slot_Grapes.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/Slot_Grapes.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/Slot_Grapes.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/Slot_Grapes.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/Slot_Grapes.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/Slot_Grapes.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/Slot_Grapes.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/Slot_Grapes.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/Slot_Grapes.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/Slot_Grapes.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/Slot_Grapes.png", 35);
		 if(slot3 == 1){
			drawImages('canvasslot3', "images/lucky-seven.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/lucky-seven.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/lucky-seven.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/lucky-seven.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/lucky-seven.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/lucky-seven.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/lucky-seven.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/lucky-seven.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/lucky-seven.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/lucky-seven.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/lucky-seven.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/lucky-seven.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/lucky-seven.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);	
		} else if( slot3 == 2){
			drawImages('canvasslot3', "images/Slot_Grapes.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/Slot_Grapes.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/Slot_Grapes.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/Slot_Grapes.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/Slot_Grapes.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/Slot_Grapes.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/Slot_Grapes.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/Slot_Grapes.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/Slot_Grapes.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/Slot_Grapes.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/Slot_Grapes.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/Slot_Grapes.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/Slot_Grapes.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);				
		} else if(slot3 == 3){
			drawImages('canvasslot3', "images/clover.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/clover.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/clover.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/clover.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/clover.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/clover.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/clover.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/clover.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/clover.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/clover.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/clover.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/clover.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/clover.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);					
		}else if(slot3 == 4){
			drawImages('canvasslot3', "images/bells-32.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/bells-32.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/bells-32.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/bells-32.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/bells-32.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/bells-32.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/bells-32.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/bells-32.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/bells-32.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/bells-32.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/bells-32.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/bells-32.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/bells-32.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);				
		}else if(slot3 == 5){
			drawImages('canvasslot3', "images/cherry.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/cherry.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/cherry.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/cherry.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/cherry.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/cherry.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/cherry.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/cherry.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/cherry.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/cherry.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/cherry.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/cherry.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/cherry.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);					
		}
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																						
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																										
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																										
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																										
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);				
		} else if(slot2 == 3){
					drawImages('canvasslot2', "images/lucky-seven.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/lucky-seven.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/lucky-seven.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/lucky-seven.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/lucky-seven.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/lucky-seven.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/lucky-seven.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/lucky-seven.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/lucky-seven.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/lucky-seven.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/lucky-seven.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/lucky-seven.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/lucky-seven.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/lucky-seven.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/lucky-seven.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/lucky-seven.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/lucky-seven.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/lucky-seven.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/lucky-seven.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/lucky-seven.png", 70);
			drawImages('canvasslot2', "images/Slot_Grapes.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/Slot_Grapes.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/Slot_Grapes.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/Slot_Grapes.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/Slot_Grapes.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/Slot_Grapes.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/Slot_Grapes.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/Slot_Grapes.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/Slot_Grapes.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/Slot_Grapes.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/Slot_Grapes.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/Slot_Grapes.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/Slot_Grapes.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/Slot_Grapes.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/Slot_Grapes.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/Slot_Grapes.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/Slot_Grapes.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/Slot_Grapes.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/Slot_Grapes.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/Slot_Grapes.png", 70);
			drawImages('canvasslot2', "images/clover.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/clover.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/clover.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/clover.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/clover.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/clover.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/clover.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/clover.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/clover.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/clover.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/clover.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/clover.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/clover.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/clover.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/clover.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/clover.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/clover.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/clover.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/clover.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/clover.png", 70);
																						
			drawImages('canvasslot2', "images/bells-32.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/bells-32.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/bells-32.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/bells-32.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/bells-32.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/bells-32.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/bells-32.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/bells-32.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/bells-32.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/bells-32.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/bells-32.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/bells-32.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/bells-32.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/bells-32.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/bells-32.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/bells-32.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/bells-32.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/bells-32.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/bells-32.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/bells-32.png", 70);
				drawImages('canvasslot2', "images/cherry.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/cherry.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/cherry.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/cherry.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/cherry.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/cherry.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/cherry.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/cherry.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/cherry.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/cherry.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/cherry.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/cherry.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/cherry.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/cherry.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/cherry.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/cherry.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/cherry.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/cherry.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/cherry.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/cherry.png", 70);
			drawImages('canvasslot2', "images/clover.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/clover.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/clover.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/clover.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/clover.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/clover.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/clover.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/clover.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/clover.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/clover.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/clover.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/clover.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/clover.png", 35);
		 if(slot3 == 1){
			drawImages('canvasslot3', "images/lucky-seven.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/lucky-seven.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/lucky-seven.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/lucky-seven.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/lucky-seven.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/lucky-seven.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/lucky-seven.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/lucky-seven.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/lucky-seven.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/lucky-seven.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/lucky-seven.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/lucky-seven.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/lucky-seven.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);	
		} else if( slot3 == 2){
			drawImages('canvasslot3', "images/Slot_Grapes.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/Slot_Grapes.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/Slot_Grapes.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/Slot_Grapes.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/Slot_Grapes.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/Slot_Grapes.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/Slot_Grapes.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/Slot_Grapes.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/Slot_Grapes.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/Slot_Grapes.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/Slot_Grapes.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/Slot_Grapes.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/Slot_Grapes.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);				
		} else if(slot3 == 3){
			drawImages('canvasslot3', "images/clover.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/clover.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/clover.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/clover.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/clover.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/clover.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/clover.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/clover.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/clover.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/clover.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/clover.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/clover.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/clover.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);					
		}else if(slot3 == 4){
			drawImages('canvasslot3', "images/bells-32.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/bells-32.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/bells-32.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/bells-32.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/bells-32.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/bells-32.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/bells-32.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/bells-32.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/bells-32.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/bells-32.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/bells-32.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/bells-32.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/bells-32.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);				
		}else if(slot3 == 5){
			drawImages('canvasslot3', "images/cherry.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/cherry.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/cherry.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/cherry.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/cherry.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/cherry.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/cherry.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/cherry.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/cherry.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/cherry.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/cherry.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/cherry.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/cherry.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);					
		}
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																						
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																										
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																										
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																										
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);						
		}else if(slot2 == 4){
					drawImages('canvasslot2', "images/lucky-seven.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/lucky-seven.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/lucky-seven.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/lucky-seven.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/lucky-seven.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/lucky-seven.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/lucky-seven.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/lucky-seven.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/lucky-seven.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/lucky-seven.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/lucky-seven.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/lucky-seven.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/lucky-seven.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/lucky-seven.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/lucky-seven.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/lucky-seven.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/lucky-seven.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/lucky-seven.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/lucky-seven.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/lucky-seven.png", 70);
			drawImages('canvasslot2', "images/Slot_Grapes.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/Slot_Grapes.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/Slot_Grapes.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/Slot_Grapes.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/Slot_Grapes.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/Slot_Grapes.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/Slot_Grapes.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/Slot_Grapes.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/Slot_Grapes.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/Slot_Grapes.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/Slot_Grapes.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/Slot_Grapes.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/Slot_Grapes.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/Slot_Grapes.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/Slot_Grapes.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/Slot_Grapes.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/Slot_Grapes.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/Slot_Grapes.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/Slot_Grapes.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/Slot_Grapes.png", 70);
			drawImages('canvasslot2', "images/clover.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/clover.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/clover.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/clover.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/clover.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/clover.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/clover.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/clover.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/clover.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/clover.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/clover.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/clover.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/clover.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/clover.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/clover.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/clover.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/clover.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/clover.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/clover.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/clover.png", 70);
																						
			drawImages('canvasslot2', "images/bells-32.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/bells-32.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/bells-32.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/bells-32.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/bells-32.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/bells-32.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/bells-32.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/bells-32.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/bells-32.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/bells-32.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/bells-32.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/bells-32.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/bells-32.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/bells-32.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/bells-32.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/bells-32.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/bells-32.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/bells-32.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/bells-32.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/bells-32.png", 70);
				drawImages('canvasslot2', "images/cherry.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/cherry.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/cherry.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/cherry.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/cherry.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/cherry.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/cherry.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/cherry.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/cherry.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/cherry.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/cherry.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/cherry.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/cherry.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/cherry.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/cherry.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/cherry.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/cherry.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/cherry.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/cherry.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/cherry.png", 70);
			drawImages('canvasslot2', "images/bells-32.png",-25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/bells-32.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/bells-32.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/bells-32.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/bells-32.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/bells-32.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/bells-32.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/bells-32.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/bells-32.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/bells-32.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/bells-32.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/bells-32.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/bells-32.png", 35);
		 if(slot3 == 1){
			drawImages('canvasslot3', "images/lucky-seven.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/lucky-seven.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/lucky-seven.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/lucky-seven.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/lucky-seven.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/lucky-seven.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/lucky-seven.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/lucky-seven.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/lucky-seven.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/lucky-seven.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/lucky-seven.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/lucky-seven.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/lucky-seven.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);	
		} else if( slot3 == 2){
			drawImages('canvasslot3', "images/Slot_Grapes.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/Slot_Grapes.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/Slot_Grapes.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/Slot_Grapes.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/Slot_Grapes.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/Slot_Grapes.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/Slot_Grapes.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/Slot_Grapes.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/Slot_Grapes.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/Slot_Grapes.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/Slot_Grapes.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/Slot_Grapes.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/Slot_Grapes.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);				
		} else if(slot3 == 3){
			drawImages('canvasslot3', "images/clover.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/clover.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/clover.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/clover.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/clover.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/clover.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/clover.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/clover.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/clover.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/clover.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/clover.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/clover.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/clover.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);					
		}else if(slot3 == 4){
			drawImages('canvasslot3', "images/bells-32.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/bells-32.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/bells-32.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/bells-32.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/bells-32.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/bells-32.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/bells-32.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/bells-32.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/bells-32.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/bells-32.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/bells-32.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/bells-32.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/bells-32.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);				
		}else if(slot3 == 5){
			drawImages('canvasslot3', "images/cherry.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/cherry.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/cherry.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/cherry.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/cherry.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/cherry.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/cherry.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/cherry.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/cherry.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/cherry.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/cherry.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/cherry.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/cherry.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);					
		}
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																						
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																										
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																										
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																										
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);				
		}else if(slot2 == 5){
					drawImages('canvasslot2', "images/lucky-seven.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/lucky-seven.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/lucky-seven.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/lucky-seven.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/lucky-seven.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/lucky-seven.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/lucky-seven.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/lucky-seven.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/lucky-seven.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/lucky-seven.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/lucky-seven.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/lucky-seven.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/lucky-seven.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/lucky-seven.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/lucky-seven.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/lucky-seven.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/lucky-seven.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/lucky-seven.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/lucky-seven.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/lucky-seven.png", 70);
			drawImages('canvasslot2', "images/Slot_Grapes.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/Slot_Grapes.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/Slot_Grapes.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/Slot_Grapes.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/Slot_Grapes.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/Slot_Grapes.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/Slot_Grapes.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/Slot_Grapes.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/Slot_Grapes.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/Slot_Grapes.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/Slot_Grapes.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/Slot_Grapes.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/Slot_Grapes.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/Slot_Grapes.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/Slot_Grapes.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/Slot_Grapes.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/Slot_Grapes.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/Slot_Grapes.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/Slot_Grapes.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/Slot_Grapes.png", 70);
			drawImages('canvasslot2', "images/clover.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/clover.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/clover.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/clover.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/clover.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/clover.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/clover.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/clover.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/clover.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/clover.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/clover.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/clover.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/clover.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/clover.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/clover.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/clover.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/clover.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/clover.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/clover.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/clover.png", 70);
																						
			drawImages('canvasslot2', "images/bells-32.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/bells-32.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/bells-32.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/bells-32.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/bells-32.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/bells-32.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/bells-32.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/bells-32.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/bells-32.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/bells-32.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/bells-32.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/bells-32.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/bells-32.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/bells-32.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/bells-32.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/bells-32.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/bells-32.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/bells-32.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/bells-32.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/bells-32.png", 70);
				drawImages('canvasslot2', "images/cherry.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/cherry.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/cherry.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/cherry.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/cherry.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/cherry.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/cherry.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/cherry.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/cherry.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/cherry.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/cherry.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/cherry.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/cherry.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/cherry.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/cherry.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/cherry.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/cherry.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/cherry.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/cherry.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/cherry.png", 70);
			drawImages('canvasslot2', "images/cherry.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/cherry.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/cherry.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/cherry.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/cherry.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/cherry.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/cherry.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/cherry.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/cherry.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/cherry.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/cherry.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/cherry.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/cherry.png", 35);
	     if(slot3 == 1){
			drawImages('canvasslot3', "images/lucky-seven.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/lucky-seven.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/lucky-seven.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/lucky-seven.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/lucky-seven.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/lucky-seven.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/lucky-seven.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/lucky-seven.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/lucky-seven.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/lucky-seven.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/lucky-seven.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/lucky-seven.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/lucky-seven.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);	
		} else if( slot3 == 2){
			drawImages('canvasslot3', "images/Slot_Grapes.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/Slot_Grapes.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/Slot_Grapes.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/Slot_Grapes.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/Slot_Grapes.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/Slot_Grapes.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/Slot_Grapes.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/Slot_Grapes.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/Slot_Grapes.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/Slot_Grapes.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/Slot_Grapes.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/Slot_Grapes.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/Slot_Grapes.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);				
		} else if(slot3 == 3){
			drawImages('canvasslot3', "images/clover.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/clover.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/clover.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/clover.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/clover.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/clover.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/clover.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/clover.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/clover.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/clover.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/clover.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/clover.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/clover.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);					
		}else if(slot3 == 4){
			drawImages('canvasslot3', "images/bells-32.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/bells-32.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/bells-32.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/bells-32.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/bells-32.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/bells-32.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/bells-32.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/bells-32.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/bells-32.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/bells-32.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/bells-32.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/bells-32.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/bells-32.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);				
		}else if(slot3 == 5){
			drawImages('canvasslot3', "images/cherry.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/cherry.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/cherry.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/cherry.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/cherry.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/cherry.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/cherry.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/cherry.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/cherry.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/cherry.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/cherry.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/cherry.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/cherry.png", 35);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);					
		}
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																						
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																										
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																										
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																										
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);			
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);					
		}
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																						
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																										
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																										
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																										
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);		
														},100);														
													},100);														
												},100);												
											},100);											
										},100);										
									},100);									
								},100);								
							},100);							
						},100);						
					},100);					
				},100);			
			},100);				
		}

		if(slot1 == slot2 || slot1 == slot3 || slot2 == slot3){
			if(slot1 != slot2 || slot1 != slot3 || slot2 != slot3){
				window.alert("Vous avez gagné 2 fois la mise !");
				credit = credit * 2;
				document.getElementById("credit").innerHTML = "Crédit: " + credit;
			}else{
			

			}
		} 
		if(slot1 == slot2 && slot1 == slot3 && slot2 == slot3){
			window.alert("Vous avez gagné 10 fois la mise !");
			credit = credit * 10;
			document.getElementById("credit").innerHTML = "Crédit: " + credit;
		}
		if(slot1 != slot2 && slot1 != slot3 && slot2 != slot3){	
			//window.alert("Vous avez perdu !");
			document.getElementById("credit").innerHTML = "Crédit: " + credit;
		}
		
	}
}
function drawImages(canvasslot, imgsrc, topspin)
{
    var c=document.getElementById(canvasslot);
    var context=c.getContext("2d");
	context.clearRect(0, 0, c.width, c.height);
	var img = new Image();
    img.onload = function () {
		context.drawImage(img, 65,topspin,img.width,img.height,65,topspin,150,75);
	}
	img.src = imgsrc ;   
	img.id = canvasslot + "img";
}
function drawImagesAnimation(canvasslot, imgsrc, imgtop)
{
	var c=document.getElementById(canvasslot);
    var context=c.getContext("2d");
	context.clearRect(0, 0, c.width, c.height);
	var img = new Image();
    img.onload = function () {
		context.drawImage(img, 65, imgtop,img.width,img.height,65,imgtop,150,75);
	}
	img.src = imgsrc ; 
	img.id = canvasslot + "img";
}
function ClearCanvas(canvasslot){
	var c=document.getElementById(canvasslot);
    var context=c.getContext("2d");
	context.clearRect(0, 0, c.width, c.height);
}
function SpinAnimation(imgsrc, canvasslot){
	var c=document.getElementById(canvasslot);
    var context=c.getContext("2d");
	context.clearRect(0, 0, c.width, c.height);
	context1.clearRect(0, 0, c1.width, c1.height);
	context2.clearRect(0, 0, c2.width, c2.height);
	var img = new Image();
    img.onload = function () {
		context.drawImage(img, 65, 17.5,img.width,img.height,65,17.5,150,75);
	}
	img.src = imgsrc ; 
	setTimeout(function(){
    context.clearRect(0, 0, c.width, c.height);
	
	    img.onload = function () {
		context.drawImage(img, 65, 35,img.width,img.height,65,35,150,75);
	}
	img.src = imgsrc ; 
    },80);
	setTimeout(function(){
	context.clearRect(0, 0, c.width, c.height);
	
	    img.onload = function () {
		context.drawImage(img, 65, 52.5,img.width,img.height,65,52.5,150,75);
	}
	img.src = imgsrc ; 
	},80);
}
function SpinAllImages2(loopstop2){
			drawImages('canvasslot2', "images/lucky-seven.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/lucky-seven.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/lucky-seven.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/lucky-seven.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/lucky-seven.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/lucky-seven.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/lucky-seven.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/lucky-seven.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/lucky-seven.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/lucky-seven.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/lucky-seven.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/lucky-seven.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/lucky-seven.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/lucky-seven.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/lucky-seven.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/lucky-seven.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/lucky-seven.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/lucky-seven.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/lucky-seven.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/lucky-seven.png", 70);
			drawImages('canvasslot2', "images/Slot_Grapes.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/Slot_Grapes.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/Slot_Grapes.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/Slot_Grapes.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/Slot_Grapes.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/Slot_Grapes.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/Slot_Grapes.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/Slot_Grapes.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/Slot_Grapes.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/Slot_Grapes.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/Slot_Grapes.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/Slot_Grapes.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/Slot_Grapes.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/Slot_Grapes.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/Slot_Grapes.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/Slot_Grapes.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/Slot_Grapes.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/Slot_Grapes.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/Slot_Grapes.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/Slot_Grapes.png", 70);
			drawImages('canvasslot2', "images/clover.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/clover.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/clover.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/clover.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/clover.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/clover.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/clover.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/clover.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/clover.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/clover.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/clover.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/clover.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/clover.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/clover.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/clover.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/clover.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/clover.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/clover.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/clover.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/clover.png", 70);
																						
			drawImages('canvasslot2', "images/bells-32.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/bells-32.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/bells-32.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/bells-32.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/bells-32.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/bells-32.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/bells-32.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/bells-32.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/bells-32.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/bells-32.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/bells-32.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/bells-32.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/bells-32.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/bells-32.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/bells-32.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/bells-32.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/bells-32.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/bells-32.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/bells-32.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/bells-32.png", 70);
				drawImages('canvasslot2', "images/cherry.png", -25);
			setTimeout(function(){
            drawImages('canvasslot2', "images/cherry.png", -20);
				setTimeout(function(){
					drawImages('canvasslot2', "images/cherry.png", -15);
					setTimeout(function(){
						drawImages('canvasslot2', "images/cherry.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot2', "images/cherry.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot2', "images/cherry.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot2', "images/cherry.png", 5);
									setTimeout(function(){
										drawImages('canvasslot2', "images/cherry.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot2', "images/cherry.png", 15);
											setTimeout(function(){
												drawImages('canvasslot2', "images/cherry.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot2', "images/cherry.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot2', "images/cherry.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot2', "images/cherry.png", 35);
															setTimeout(function(){
																drawImages('canvasslot2', "images/cherry.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot2', "images/cherry.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot2', "images/cherry.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot2', "images/cherry.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot2', "images/cherry.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot2', "images/cherry.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot2', "images/cherry.png", 70);
																						//selection 2	
																						
																						
																						
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																						
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																										
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																										
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																										
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);	
}
function SpinAllImages3(loopstop3){
			drawImages('canvasslot3', "images/lucky-seven.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/lucky-seven.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/lucky-seven.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/lucky-seven.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/lucky-seven.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/lucky-seven.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/lucky-seven.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/lucky-seven.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/lucky-seven.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/lucky-seven.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/lucky-seven.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/lucky-seven.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/lucky-seven.png", 35);
															setTimeout(function(){
																drawImages('canvasslot3', "images/lucky-seven.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot3', "images/lucky-seven.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot3', "images/lucky-seven.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot3', "images/lucky-seven.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot3', "images/lucky-seven.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot3', "images/lucky-seven.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot3', "images/lucky-seven.png", 70);
			drawImages('canvasslot3', "images/Slot_Grapes.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/Slot_Grapes.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/Slot_Grapes.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/Slot_Grapes.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/Slot_Grapes.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/Slot_Grapes.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/Slot_Grapes.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/Slot_Grapes.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/Slot_Grapes.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/Slot_Grapes.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/Slot_Grapes.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/Slot_Grapes.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/Slot_Grapes.png", 35);
															setTimeout(function(){
																drawImages('canvasslot3', "images/Slot_Grapes.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot3', "images/Slot_Grapes.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot3', "images/Slot_Grapes.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot3', "images/Slot_Grapes.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot3', "images/Slot_Grapes.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot3', "images/Slot_Grapes.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot3', "images/Slot_Grapes.png", 70);
			drawImages('canvasslot3', "images/clover.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/clover.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/clover.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/clover.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/clover.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/clover.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/clover.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/clover.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/clover.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/clover.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/clover.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/clover.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/clover.png", 35);
															setTimeout(function(){
																drawImages('canvasslot3', "images/clover.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot3', "images/clover.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot3', "images/clover.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot3', "images/clover.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot3', "images/clover.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot3', "images/clover.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot3', "images/clover.png", 70);
			drawImages('canvasslot3', "images/bells-32.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/bells-32.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/bells-32.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/bells-32.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/bells-32.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/bells-32.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/bells-32.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/bells-32.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/bells-32.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/bells-32.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/bells-32.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/bells-32.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/bells-32.png", 35);
															setTimeout(function(){
																drawImages('canvasslot3', "images/bells-32.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot3', "images/bells-32.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot3', "images/bells-32.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot3', "images/bells-32.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot3', "images/bells-32.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot3', "images/bells-32.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot3', "images/bells-32.png", 70);
				drawImages('canvasslot3', "images/cherry.png", -25);
			setTimeout(function(){
            drawImages('canvasslot3', "images/cherry.png", -20);
				setTimeout(function(){
					drawImages('canvasslot3', "images/cherry.png", -15);
					setTimeout(function(){
						drawImages('canvasslot3', "images/cherry.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot3', "images/cherry.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot3', "images/cherry.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot3', "images/cherry.png", 5);
									setTimeout(function(){
										drawImages('canvasslot3', "images/cherry.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot3', "images/cherry.png", 15);
											setTimeout(function(){
												drawImages('canvasslot3', "images/cherry.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot3', "images/cherry.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot3', "images/cherry.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot3', "images/cherry.png", 35);
															setTimeout(function(){
																drawImages('canvasslot3', "images/cherry.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot3', "images/cherry.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot3', "images/cherry.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot3', "images/cherry.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot3', "images/cherry.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot3', "images/cherry.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot3', "images/cherry.png", 70);
																						//selection 3
																						
																						
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																						
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																										
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																										
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																										
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);				
}
function SpinAllImages1(loopstop1){

			drawImages('canvasslot1', "images/lucky-seven.png", -25);
			setTimeout(function(){
            drawImages('canvasslot1', "images/lucky-seven.png", -20);
				setTimeout(function(){
					drawImages('canvasslot1', "images/lucky-seven.png", -15);
					setTimeout(function(){
						drawImages('canvasslot1', "images/lucky-seven.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot1', "images/lucky-seven.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot1', "images/lucky-seven.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot1', "images/lucky-seven.png", 5);
									setTimeout(function(){
										drawImages('canvasslot1', "images/lucky-seven.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot1', "images/lucky-seven.png", 15);
											setTimeout(function(){
												drawImages('canvasslot1', "images/lucky-seven.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot1', "images/lucky-seven.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot1', "images/lucky-seven.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot1', "images/lucky-seven.png", 35);
															setTimeout(function(){
																drawImages('canvasslot1', "images/lucky-seven.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot1', "images/lucky-seven.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot1', "images/lucky-seven.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot1', "images/lucky-seven.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot1', "images/lucky-seven.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot1', "images/lucky-seven.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot1', "images/lucky-seven.png", 70);
			drawImages('canvasslot1', "images/Slot_Grapes.png", -25);
			setTimeout(function(){
            drawImages('canvasslot1', "images/Slot_Grapes.png", -20);
				setTimeout(function(){
					drawImages('canvasslot1', "images/Slot_Grapes.png", -15);
					setTimeout(function(){
						drawImages('canvasslot1', "images/Slot_Grapes.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot1', "images/Slot_Grapes.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot1', "images/Slot_Grapes.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot1', "images/Slot_Grapes.png", 5);
									setTimeout(function(){
										drawImages('canvasslot1', "images/Slot_Grapes.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot1', "images/Slot_Grapes.png", 15);
											setTimeout(function(){
												drawImages('canvasslot1', "images/Slot_Grapes.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot1', "images/Slot_Grapes.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot1', "images/Slot_Grapes.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot1', "images/Slot_Grapes.png", 35);
															setTimeout(function(){
																drawImages('canvasslot1', "images/Slot_Grapes.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot1', "images/Slot_Grapes.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot1', "images/Slot_Grapes.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot1', "images/Slot_Grapes.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot1', "images/Slot_Grapes.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot1', "images/Slot_Grapes.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot1', "images/Slot_Grapes.png", 70);
			drawImages('canvasslot1', "images/clover.png", -25);
			setTimeout(function(){
            drawImages('canvasslot1', "images/clover.png", -20);
				setTimeout(function(){
					drawImages('canvasslot1', "images/clover.png", -15);
					setTimeout(function(){
						drawImages('canvasslot1', "images/clover.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot1', "images/clover.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot1', "images/clover.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot1', "images/clover.png", 5);
									setTimeout(function(){
										drawImages('canvasslot1', "images/clover.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot1', "images/clover.png", 15);
											setTimeout(function(){
												drawImages('canvasslot1', "images/clover.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot1', "images/clover.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot1', "images/clover.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot1', "images/clover.png", 35);
															setTimeout(function(){
																drawImages('canvasslot1', "images/clover.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot1', "images/clover.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot1', "images/clover.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot1', "images/clover.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot1', "images/clover.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot1', "images/clover.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot1', "images/clover.png", 70);
			drawImages('canvasslot1', "images/bells-32.png", -25);
			setTimeout(function(){
            drawImages('canvasslot1', "images/bells-32.png", -20);
				setTimeout(function(){
					drawImages('canvasslot1', "images/bells-32.png", -15);
					setTimeout(function(){
						drawImages('canvasslot1', "images/bells-32.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot1', "images/bells-32.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot1', "images/bells-32.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot1', "images/bells-32.png", 5);
									setTimeout(function(){
										drawImages('canvasslot1', "images/bells-32.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot1', "images/bells-32.png", 15);
											setTimeout(function(){
												drawImages('canvasslot1', "images/bells-32.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot1', "images/bells-32.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot1', "images/bells-32.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot1', "images/bells-32.png", 35);
															setTimeout(function(){
																drawImages('canvasslot1', "images/bells-32.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot1', "images/bells-32.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot1', "images/bells-32.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot1', "images/bells-32.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot1', "images/bells-32.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot1', "images/bells-32.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot1', "images/bells-32.png", 70);
				drawImages('canvasslot1', "images/cherry.png", -25);
			setTimeout(function(){
            drawImages('canvasslot1', "images/cherry.png", -20);
				setTimeout(function(){
					drawImages('canvasslot1', "images/cherry.png", -15);
					setTimeout(function(){
						drawImages('canvasslot1', "images/cherry.png", -10);	
						setTimeout(function(){
							drawImages('canvasslot1', "images/cherry.png", -5);	
							setTimeout(function(){
								drawImages('canvasslot1', "images/cherry.png", 0);	
								setTimeout(function(){
									drawImages('canvasslot1', "images/cherry.png", 5);
									setTimeout(function(){
										drawImages('canvasslot1', "images/cherry.png", 10);	
										setTimeout(function(){
											drawImages('canvasslot1', "images/cherry.png", 15);
											setTimeout(function(){
												drawImages('canvasslot1', "images/cherry.png", 20);	
												setTimeout(function(){
													drawImages('canvasslot1', "images/cherry.png", 25);	
													setTimeout(function(){
														drawImages('canvasslot1', "images/cherry.png", 30);	
														setTimeout(function(){
															drawImages('canvasslot1', "images/cherry.png", 35);
															setTimeout(function(){
																drawImages('canvasslot1', "images/cherry.png", 40);
																setTimeout(function(){
																	drawImages('canvasslot1', "images/cherry.png", 45);
																	setTimeout(function(){
																		drawImages('canvasslot1', "images/cherry.png", 50);
																		setTimeout(function(){
																			drawImages('canvasslot1', "images/cherry.png", 55);
																			setTimeout(function(){
																				drawImages('canvasslot1', "images/cherry.png", 60);
																				setTimeout(function(){
																					drawImages('canvasslot1', "images/cherry.png", 65);
																					setTimeout(function(){
																						drawImages('canvasslot1', "images/cherry.png", 70);
																						//selection 1
																						
																						
																						//arretimg1


																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																						
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																										
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																										
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																										
																					},100);																					
																				},100);																		
																			},100);																			
																		},100);																		
																	},100);																	
																},100);																
															},100);
														},100);
													},100);
												},100);
											},100);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},100);																								

}
//add 40 ms between all the differents images
/* function SpinAnimationAllImages(stopimage, loopnumber, canvasslot){
	//--canvasslot1---------------------------------------
	var loopfnumber = 1;
	while(loopfnumber <= loopnumber){
		if(loopfnumber == 1){
			SpinAnimation("images/lucky-seven.png",canvasslot);
			setTimeout(function(){
			CanvasClear(canvasslot);
			SpinAnimation("images/Slot_Grapes.png",canvasslot);	
			},40);
			setTimeout(function(){
			CanvasClear(canvasslot);
			SpinAnimation("images/clover.png",canvasslot);	
			},40);
			setTimeout(function(){
			CanvasClear(canvasslot);
			SpinAnimation("images/bells-32.png",canvasslot);	
			},40);					
			setTimeout(function(){
			CanvasClear('canvasslot1');
			SpinAnimation("images/cherry.png",canvasslot);	
			},40);						
		}else{
			setTimeout(function(){
			CanvasClear(canvasslot);
			SpinAnimation("images/lucky-seven.png",canvasslot);
			},40);
			setTimeout(function(){
			CanvasClear(canvasslot);
			SpinAnimation("images/Slot_Grapes.png",canvasslot);	
			},40);
			setTimeout(function(){
			CanvasClear(canvasslot);
			SpinAnimation("images/clover.png",canvasslot);	
			},40);
			setTimeout(function(){
			CanvasClear(canvasslot);
			SpinAnimation("images/bells-32.png",canvasslot);	
			},40);					
			setTimeout(function(){
			CanvasClear(canvasslot);
			SpinAnimation("images/cherry.png",canvasslot);	
			},40);		
		}
		loopfnumber = loopfnumber + 1;
	}
		if(stopimage == 1){
			CanvasClear(canvasslot);
			drawImagesAnimation(canvasslot, "images/lucky-seven.png", 17.5);
			setTimeout(function(){
				CanvasClear(canvasslot);
				drawImagesAnimation(canvasslot, "images/lucky-seven.png", 35);
			},80);
		}else if(stopimage == 2){
			CanvasClear(canvasslot);
			SpinAnimation("images/lucky-seven.png",canvasslot);
			CanvasClear(canvasslot);
			drawImagesAnimation(canvasslot, "images/Slot_Grapes.png", 17.5);
			setTimeout(function(){
				CanvasClear(canvasslot);
				drawImagesAnimation(canvasslot, "images/Slot_Grapes.png", 35);
			},80);			
		}else if(stopimage == 3){
			CanvasClear(canvasslot);
			SpinAnimation("images/lucky-seven.png",canvasslot);
			CanvasClear(canvasslot);
			SpinAnimation("images/Slot_Grapes.png",canvasslot);
			CanvasClear(canvasslot);
			drawImagesAnimation(canvasslot, "images/clover.png", 17.5);
			setTimeout(function(){
				CanvasClear(canvasslot);
				drawImagesAnimation(canvasslot, "images/clover.png", 35);
			},80);					
			
		}else if(stopimage == 4){
			CanvasClear(canvasslot);
			SpinAnimation("images/lucky-seven.png",canvasslot);
			CanvasClear(canvasslot);
			SpinAnimation("images/Slot_Grapes.png",canvasslot);
			CanvasClear(canvasslot);
			SpinAnimation("images/clover.png",canvasslot);
			CanvasClear(canvasslot);
			drawImagesAnimation(canvasslot, "images/bells-32.png", 17.5);
			setTimeout(function(){
				CanvasClear(canvasslot);
				drawImagesAnimation(canvasslot, "images/bells-32.png", 35);
			},80);					
		}else if(stopimage == 5){
			CanvasClear(canvasslot);
			SpinAnimation("images/lucky-seven.png",canvasslot);
			CanvasClear(canvasslot);
			SpinAnimation("images/Slot_Grapes.png",canvasslot);
			CanvasClear(canvasslot);
			SpinAnimation("images/clover.png",canvasslot);
			CanvasClear(canvasslot);
			SpinAnimation("images/bells-32.png",canvasslot);
			CanvasClear(canvasslot);
			drawImagesAnimation(canvasslot, "images/bells-32.png", 17.5);
			setTimeout(function(){
				CanvasClear(canvasslot);
				drawImagesAnimation(canvasslot, "images/cherry.png", 35);
			},80);
		}
	//--------------------------------------------------
	} */

  const Engine= Matter.Engine;
  const World = Matter.World;
  const Bodies = Matter.Bodies;
  const Render= Matter.Render

  var particles = [];
  var plinkos = [];
  var divisions =[];
  var divisionHeight=300;

  function setup()
  {

    createCanvas(900,500);
    engine=Engine.create();
    world=engine.world;


    ground = new Ground(450,480,900,20);

    for(var i=0; i<width; i=i+80)
    {
      divisions.push(division=new Divisions (i,395,10,150)) 
    }

    for (var i=75; i<=width; i=i+50)
    {
      plinkos.push(plinko=new Plinko(i,75) )
    }
    
    for (var i=65; i<=width; i=i+50)
    {
      plinkos.push(plinko=new Plinko(i,120) )
    }

    for (var i=75; i<=width; i=i+50)
    {
      plinkos.push(plinko=new Plinko(i,165) )
    }

    for (var i=65; i<=width; i=i+50)
    {
      plinkos.push(plinko=new Plinko(i,210) )
    }


    /*var render = Render.create({
      element: document.body,
      engine: engine,
      options: 
      {
          width: 1300,
        height: 700,
        wireframes: false
      }
    }); 
 
   
   Render.run(render);
   */
   
  }

  function draw()
  {
    Engine.update(engine)

    background("black")
    ground.display()

    for (var i=0; i<divisions.length; i++)
    {
      divisions[i].display()
    }

    for(var i=0; i<plinkos.length; i++)
    {
      plinkos[i].display()
    }

    for(var i=0; i<plinkos.length; i++)
    {
      plinkos[i].display()
    }

    for(var i=0; i<plinkos.length; i++)
    {
      plinkos[i].display()
    }

    if(frameCount %60===0)
    {
      particles.push(particle =new Particle (random(350,100),10,10))
    }

    for(var i=0; i<particles.length; i++)
    {
      particles[i].display()
    }

    

  }

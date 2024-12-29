export const properties = [
    {
      id: 1,
      imageSrc:'images/Education.png',
      setOfData: "Education",
      caption:'Education',
      description:<div className="Education description">
           <h2>MEng - Integrated Mechanical and electrical engineering</h2>
           <p><span style={{fontStyle: 'italic', fontWeight:100}}>University of Bath, 2019-2024</span></p>
           <div style={{marginTop:10, marginBottom:10}}>
            <p><span style={{fontWeight:100}}>Grade: </span>First Class (72.6% Ovr)*</p>
           </div>
           <p><span style={{fontWeight:100}}>Final Year Modules: </span>Digital Image Processing (86%), Computational Intelligance (76%), Advanced Control (92%), System Modelling and Simulation (77%), Robotics Engineering (80%), Final Year Project (69%)</p>
           <div style={{marginTop:10, marginBottom:20}}>
            <p><span style={{fontWeight:100, fontSize:14, fontStyle:'italic'}}>*Transcript availible upon request.</span></p>
           </div>
           <h2>A-Levels</h2>
           <p><span style={{fontStyle: 'italic', fontWeight:100}}>Prior Park College, 2019</span></p>
           <div style={{marginTop:10, marginBottom:10}}>
            <p><span style={{fontWeight:100}}>Grades: </span>A*A*A*A*</p>
            <p><span style={{fontWeight:100}}>Subjects: </span>Maths, Futher Maths, Physics and Chemistry</p>
           </div>
           <h2>GCSEs</h2>
           <p><span style={{fontStyle: 'italic', fontWeight:100}}>Prior Park College, 2017</span></p>
           <div style={{marginTop:10, marginBottom:20}}>
            <p><span style={{fontWeight:100}}>Grades: </span>5A*, 4A, 7, 6</p>
           </div>
          </div>,
    },
    {
        id: 2,
        imageSrc:"images/babcock.png",
        setOfData: "Babcock International",
        caption:'Data Analytics Intern',
        description:<div className="Education description">
           <h2>Summer placement at Babcock International</h2>
           <p><span style={{fontStyle: 'italic', fontWeight:100}}>2024</span></p>
           <div style={{marginTop:10, marginBottom:10}}>
            <p>At Babcock, I joined the Data Exploitation team, which included data engineers, data scientists, data analysts and data visualisation experts. Through the 3 months I was able to spend time with each of these teams, with some of the highlights being:</p>
            <ul style={{listStyleType:'disc', marginLeft:20, marginTop:8}}>
              <li>Using data science and machine learning techniques to recognise handwriting, enabling documents to be labelled with their date.</li>
              <li>Building an in-depth report on current optimisation techniques that could be used by the company.</li>
              <li>Applying my data structure knowledge, and my expertise in python and SQL to analyse the daily changes in data.</li>
              <li>Building Power BI dashboards for the company to optimise efficiency.</li>
            </ul>
           </div>
           <p><span style={{fontStyle: 'italic', fontWeight:100}}>Skills: Python, SQL, Power BI, Optimisation, Pandas</span></p>
          </div>,
    },
    {
        id: 3,
        imageSrc:"images/Spagetti.png",
        setOfData: "Final Year Project",
        caption:'Final Year Project',
        description:<div className="Education description">
          <h2>Optimising the Parameters for Temporal Electrode Distributions</h2>
           <p><span style={{fontStyle: 'italic', fontWeight:100}}>University of Bath, 2024</span></p>
           <div style={{marginTop:10, marginBottom:10}}>
            <p>I Optimised experimental processes within the field of neuron stimulation using machine learning and computational techniques. The hope is that the research could improve devices that already help with conditions like Epilepsy and depression. Highlights of the project were: </p>
            <ul style={{listStyleType:'disc', marginLeft:20, marginTop:8}}>
              <li>Developing a program that simulates a peripheral nerve to test optimisation techniques.</li>
              <li>Collecting and organised volumes of data from a simulation using a Linux operating system.</li>
              <li>Using graphical techniques to analyse patterns.</li>
              <li>Building a comprehensive project plan with meaningful and attainable objectives.</li>
              <li>Reseaching extensively to improve my understanding of peripheral nerves.</li>
            </ul>
           </div>
           <p><span style={{fontStyle: 'italic', fontWeight:100}}>Skills: Python</span></p>

          <h3 style={{marginBottom:10, marginTop:20}}>Abstract</h3>
            <p style={{marginBottom:8}}>Neural devices have great potential to advance understanding of neural physiology and enhance neurorehabilitation tools. However, integrating stimulation and recording functions in these devices gives rise to significant challenges due to current limitations in recording devices. Velocity Selective Recording (VSR) offers the potential to solve this using longitudinally spaced electrodes to record action potentials. Despite there being a substantial amount of work on VSR to this point, the optimal configuration of these electrodes and the appropriate sample frequency for accurate results has not been thoroughly researched.</p>

            <p style={{marginBottom:8}}>This study aims to fill that gap by exploring the effects of key setup parameters — Sample Frequency, Inter-Electrode Spacing, and Number of Electrodes — on VSR accuracy and precision. Using a Trans-Membrane Action Potential simulation, the intrinsic velocity spectrum is analysed to understand how each parameter influences the VSR results. The findings indicate all three parameters impact the accuracy of VSR, while precision is primarily influenced by Inter-Electrode Spacing and Number of Electrodes.</p>

            <p style={{marginBottom:8}}>In addition to quantifying these effects, optimisation and modeling techniques are used to determine the optimal setup for future VSR experiments. Among the algorithms compared, Particle Swarm Optimisation and Linear Regression Modeling emerged as the most effective for this purpose. These insights are then applied to real-world data, revealing that while the accuracy can be improved upon, the precision of the real-world data used is superior.</p>

            <p style={{marginBottom:8}}>Ultimately, this work provides a framework from which a longitudinal array of electrodes may be optimised. This offers researchers the opportunity to significantly improve the reliability and efficacy of Velocity Selective Recordings.</p>          
          </div>,
    },
    {
        id: 4,
        imageSrc:"images/UoB_Swimming.png",
        setOfData: "University of Bath Swimming Club Logo",
        caption:'Chair and Treasurer',
        description:<div className="Education description">
          <h2>University of Bath Swimming Club</h2>
          <p><span style={{fontStyle: 'italic', fontWeight:100}}>2022-2024</span></p>
           <div style={{marginTop:10, marginBottom:10}}>
            <p>In my third year at university I was treasurer, and in my final year, chair. Here, I was responsible for:</p>
            <ul style={{listStyleType:'disc', marginLeft:20, marginTop:8}}>
              <li>Organising events for the club and committee.</li>
              <li>Establishing a more inclusive and enjoyable culture.</li>
              <li>Helping everyone else on the committee complete their jobs.</li>
              <li>Managing finances, which in turn improved my budgeting skills and developed my financial awareness.</li>
            </ul>
           </div>
         </div>,
    },
    {
        id: 5,
        imageSrc:"images/3PInnovation.jpg",
        setOfData: "3P Innovation Limited",
        caption:'Electrical Engineering Intern',
        description:<div className="Education description">
          <h2>12-Month Placement at 3P Innovation</h2>
          <p><span style={{fontStyle: 'italic', fontWeight:100}}>2021-2022</span></p>
          <div style={{marginTop:10, marginBottom:10}}>
            <p>At 3P, I desgined and built electrical panels for pharmacutical automation machines. I gained a lot of experience, enjoying the collaborative atmosphere with my collegues. The highlights were:</p>
            <ul style={{listStyleType:'disc', marginLeft:20, marginTop:8}}>
              <li>Leading the electrical work stream on 10+ automation projects.</li>
              <li>Presenting my designs to my collegues, and my machines to clients.</li>
              <li>Documenting all of my work in user manuals and design sheets.</li>
              <li>Gaining experience with programs such as AutoCAD Electrical, Arduino and Microsoft Excel macros.</li>
            </ul>
           </div>
           <p><span style={{fontStyle: 'italic', fontWeight:100}}>Skills: AutoCAD, Arduino, VBA</span></p>
         </div>,
    },
    {
        id: 6,
        imageSrc:"images/MoreProjects.png",
        setOfData: "Further Projects",
        caption:'Further Projects',
        description:<div className="Education description">
          <h2>Computational Intelligance Projects</h2>
          <ul style={{listStyleType:'disc', marginLeft:20, marginTop:8, marginBottom:20}}>
            <li>Learned the basics of machine learning, like the perceptron.</li>
            <li>Built on this to optimise problem spaces (eg: a complicated equation) using Genetic Algorithms. </li>
            <li>Investigated Swarm optimisation techniques and compared these to Genetic Algorithms.</li>
            <li>Worked with convolutional neural networks to detect and classify nervous system signals.</li>
            <li>Optimised the variables associated with each algorithm to improve performance.</li>
          </ul>
          <h2>Robot Elephant Group Project</h2>
          <ul style={{listStyleType:'disc', marginLeft:20, marginTop:8, marginBottom:20}}>
            <li>As a group we built and programmed a robot elephant's movements and interactions for a client.</li>
            <li>I led the team to ensure a harmonious design interface between the electrical and mechanical sub-systems.</li>
            <li>As Software lead, I programmed the movement of the elephant eye, as well as its physical movements.</li>
            <li>We presented the complex design in an understandable way to people with little knowledge of the project. </li>
          </ul>
          <h2>Other University Projects</h2>
          <ul style={{listStyleType:'disc', marginLeft:20, marginTop:8, marginBottom:20}}>
            <li>Controlled a fan using both Arduino and embedded C (separate projects).</li>
            <li>Modelled the diffusion of a drug into the body through the skin.</li>
            <li>Built an analog remote-control car from first principles (group project).</li>
            <li>Computer Aided Design Projects using: Autodesk Inventor, AutoCAD, OrCAD.</li>
            <li>Extensive portfolio of reports produced using Microsoft word and LaTeX.</li>
          </ul>
          <p><span style={{fontStyle: 'italic', fontWeight:100}}>Skills: Python, C++, MATLAB, Simulink, C, AutoCAD, Inventor, OrCAD</span></p>
         </div>,
    },
  ];
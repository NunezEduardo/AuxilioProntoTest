// details.js – Content data for every detail screen
const DETAILS = {
  /* ── HERIDAS CCC ── */
  'herida-cortante': {
    title:  'Heridas Cortantes',
    back:   'screen-heridas',
    color:  '#e91e7a',
    content: `
      <h2>Herida cortante</h2>
      <h3>1. Lavarse las manos</h3>
      <p>Antes de tocar la herida, lávate las manos con agua y jabón para evitar la transferencia de bacterias y prevenir infecciones.</p>
      <h3>2. Detener el sangrado (Prioridad)</h3>
      <p>Las heridas cortantes suelen sangrar de forma constante.</p>
      <ul>
        <li>Aplica presión directa y firme sobre el corte utilizando una gasa estéril o un paño limpio.</li>
        <li>Mantén la presión durante 5 minutos seguidos sin levantar la gasa para revisar, ya que esto podría romper el coágulo que se está formando.</li>
        <li>Si la herida es en un brazo o una pierna, elévala por encima del nivel del corazón para reducir el flujo de sangre.</li>
      </ul>
      <h3>3. Limpiar la herida</h3>
      <p>Una vez que el sangrado haya disminuido o parado:</p>
      <ul>
        <li>Enjuaga la zona con agua limpia del grifo durante unos minutos para retirar cualquier residuo.</li>
        <li>Limpia la piel de los alrededores con jabón suave. Intenta que no entre jabón directamente en el corte para evitar irritación.</li>
        <li>Al igual que en otros casos, evita el alcohol o el agua oxigenada, ya que retrasan el proceso natural de curación.</li>
      </ul>
      <h3>4. Aplicar un ungüento y cubrir</h3>
      <ul>
        <li>Si dispones de ella, aplica una capa fina de pomada antibiótica o vaselina para mantener la zona humectada.</li>
        <li>Junta los bordes de la piel con cuidado si es posible y cúbrela con una tirita (curita) o una gasa estéril sujeta con esparadrapo.</li>
      </ul>
    `
  },
  'herida-punzante': {
    title:  'Heridas Punzantes',
    back:   'screen-heridas',
    color:  '#e91e7a',
    content: `
      <h2>Herida punzante</h2>
      <h3>1. Lavarse las manos</h3>
      <p>Antes de atender a la persona, lávate muy bien las manos con agua y jabón para evitar introducir bacterias en la lesión.</p>
      <h3>2. Evaluar el objeto incrustado (Regla de oro)</h3>
      <ul>
        <li><strong>Si el objeto sigue clavado:</strong> NO lo retires. Sacarlo puede provocar una hemorragia grave o causar más daño a los tejidos internos. Inmoviliza el objeto colocando gasas o paños limpios a los lados para que no se mueva y busca atención médica de inmediato.</li>
        <li><strong>Si el objeto ya no está en la herida:</strong> Procede con los siguientes pasos de limpieza.</li>
      </ul>
      <h3>3. Detener el sangrado</h3>
      <p>Las heridas punzantes no suelen sangrar de forma abundante a menos que hayan alcanzado un vaso sanguíneo importante. Si hay sangrado, aplica presión directa y suave sobre la zona con una gasa estéril o un paño limpio durante unos minutos.</p>
      <h3>4. Limpiar la herida</h3>
      <ul>
        <li>Enjuaga la zona afectada con abundante agua limpia del grifo durante unos 5 minutos para arrastrar la suciedad hacia afuera.</li>
        <li>Lava la piel de alrededor con un jabón suave.</li>
        <li>Nota: Evita usar alcohol o agua oxigenada dentro de la herida, ya que pueden dañar las células y retrasar la curación.</li>
      </ul>
      <h3>5. Aplicar un ungüento y cubrir</h3>
      <ul>
        <li>Si la herida está limpia y ha dejado de sangrar, aplica una capa fina de pomada antibiótica o vaselina.</li>
        <li>Cúbrela con una tirita (curita) o una gasa estéril para protegerla de la suciedad del entorno.</li>
      </ul>
    `
  },
  'herida-contusa': {
    title:  'Heridas Contusas',
    back:   'screen-heridas',
    color:  '#e91e7a',
    content: `
      <h2>Herida contusa</h2>
      <h3>1. Lavarse las manos</h3>
      <p>Antes de tocar la zona afectada, lávate muy bien las manos con agua y jabón para evitar introducir bacterias en la herida.</p>
      <h3>2. Controlar el sangrado</h3>
      <p>Debido al impacto, estas heridas pueden sangrar.</p>
      <ul>
        <li>Aplica presión firme y directa sobre la herida con una gasa estéril o un paño limpio durante unos 5 a 10 minutos.</li>
        <li>Si la herida está en un brazo o una pierna, eleva la extremidad por encima del nivel del corazón para ayudar a reducir el sangrado.</li>
      </ul>
      <h3>3. Limpiar la zona</h3>
      <ul>
        <li>Enjuaga la herida con agua limpia y templada a chorro suave para eliminar la suciedad, la sangre acumulada o los residuos.</li>
        <li>Limpia la piel de alrededor con agua y jabón suave, evitando aplicarlo directamente dentro del corte.</li>
        <li>Evita el uso de alcohol o agua oxigenada, ya que pueden dañar el tejido expuesto y retrasar la cicatrización.</li>
      </ul>
      <h3>4. Reducir la inflamación (el "chichón" o hematoma)</h3>
      <p>Como hay un componente de golpe (contusión), la zona se va a inflamar rápidamente.</p>
      <ul>
        <li>Aplica una compresa fría o hielo envuelto en un paño limpio sobre la zona durante 10 a 15 minutos. Nunca aplajes el hielo directamente sobre la piel o la herida abierta.</li>
      </ul>
      <h3>5. Proteger la herida</h3>
      <p>Si la piel se ha abierto, aplica una capa fina de pomada antiséptica o vaselina para mantenerla húmeda y cúbrela con una gasa estéril y esparadrapo o una venda limpia.</p>
    `
  },
  'herida-abrasiva': {
    title:  'Heridas Abrasivas',
    back:   'screen-heridas',
    color:  '#e91e7a',
    content: `
      <h2>Herida abrasiva</h2>
      <h3>1. Lavarse las manos</h3>
      <p>Antes de tocar la herida, lávate muy bien las manos con agua y jabón para evitar transferir bacterias a la zona expuesta.</p>
      <h3>2. Limpiar la herida (El paso más importante)</h3>
      <p>Los raspones suelen acumular mucha suciedad, tierra o arena, lo que eleva el riesgo de infección.</p>
      <ul>
        <li>Deja correr agua limpia y templada del grifo directamente sobre el raspón durante unos minutos para arrastrar la suciedad.</li>
        <li>Limpia la piel de alrededor con un jabón suave. Si queda tierra incrustada dentro de la herida, puedes usar una gasa limpia humedecida para retirarla con mucha suavidad.</li>
        <li>Evita el alcohol, el agua oxigenada o el yodo, ya que queman las células nuevas de la piel y retrasan la curación.</li>
      </ul>
      <h3>3. Detener el sangrado leve</h3>
      <p>Las abrasiones no suelen sangrar de forma abundante, sino que "rezuman" sangre o líquido transparente. Si sangra un poco, ejerce una presión suave con una gasa estéril o un paño limpio durante unos minutos.</p>
      <h3>4. Mantener la herida hidratada</h3>
      <p>Aplica una capa fina de vaselina de petróleo o una pomada antibiótica. Esto mantiene la zona húmeda, evita que la costra se rompa al mover la articulación y reduce la posibilidad de que quede cicatriz.</p>
      <h3>5. Cubrir la zona</h3>
      <ul>
        <li>Si la raspadura es grande o va a rozar con la ropa, cúbrela con una gasa estéril que no se pegue y sujétala con esparadrapo o una venda suave.</li>
        <li>Si el raspón es muy pequeño y no está expuesto al roce ni a la suciedad, puedes dejarlo al aire libre una vez limpio.</li>
      </ul>
      <h3>6. Cambiar el vendaje</h3>
      <p>Cambia la gasa al menos una vez al día o cada vez que se moje o se ensucie. Aprovecha para revisar que la herida mantenga un buen aspecto.</p>
    `
  },
  'herida-superficial': {
    title:  'Heridas Superficiales',
    back:   'screen-heridas',
    color:  '#e91e7a',
    content: `
      <h2>Herida superficial</h2>
      <h3>1. Lavarse las manos</h3>
      <p>Antes de tocar la herida, lávate muy bien las manos con agua y jabón. Esto evita transferir bacterias de tus manos al corte.</p>
      <h3>2. Limpiar la herida</h3>
      <ul>
        <li><strong>Agua corriente:</strong> Enjuaga la herida con agua limpia y fresca del grifo durante unos minutos para eliminar la suciedad o la arena.</li>
        <li><strong>Jabón suave:</strong> Limpia la piel alrededor de la herida con un jabón suave. Intenta que no entre jabón directo en la herida para evitar irritación.</li>
        <li><strong>Nota:</strong> No es necesario usar alcohol, agua oxigenada o yodo, ya que pueden irritar el tejido sano y retrasar la curación.</li>
      </ul>
      <h3>3. Detener el sangrado (si lo hay)</h3>
      <p>Las heridas superficiales no suelen sangrar mucho, pero si lo hacen, aplica una presión suave con una gasa limpia o un paño limpio durante unos minutos hasta que pare.</p>
      <h3>4. Aplicar un ungüento (opcional)</h3>
      <p>Puedes aplicar una capa fina de vaselina de petróleo o una crema antibiótica de venta libre. Esto mantiene la zona húmeda, lo que ayuda a prevenir cicatrices y evita que la venda se pegue.</p>
      <h3>5. Cubrir la herida</h3>
      <p>Coloca una tirita (curita) o una gasa estéril sobre la herida. Esto la protege de la suciedad y de las bacterias mientras se cura. Si es un raspón muy leve que no sangra ni roza con la ropa, puedes dejarlo al aire libre.</p>
      <h3>6. Cambiar el vendaje</h3>
      <p>Cambia la tirita o gasa al menos una vez al día, o antes si se moja o se ensucia.</p>
    `
  },
  'herida-profunda': {
    title:  'Heridas Profundas',
    back:   'screen-heridas',
    color:  '#e91e7a',
    content: `
      <h2>Herida profunda</h2>
      <h3>1. Evaluar la seguridad y llamar a emergencias</h3>
      <ul>
        <li>Asegúrate de que la zona sea segura para ti y para la víctima.</li>
        <li>Llama inmediatamente al número de emergencias de tu localidad o pide a alguien más que lo haga.</li>
      </ul>
      <h3>2. Lavarse las manos (si es posible)</h3>
      <ul>
        <li>Si tienes tiempo y acceso, lávate las manos con agua y jabón, o colócate guantes desechables para proteger a la persona de infecciones y protegerte a ti de enfermedades de transmisión sanguínea.</li>
      </ul>
      <h3>3. Controlar la hemorragia (El paso más crítico)</h3>
      <ul>
        <li><strong>Presión directa:</strong> Coloca una gasa estéril, un paño limpio o una prenda de ropa limpia directamente sobre la herida y presiona con firmeza usando ambas manos.</li>
        <li><strong>Mantén la presión:</strong> No levantes la gasa para ver si ha dejado de sangrar, ya que esto puede romper el coágulo que se está formando. Si la sangre empapa la gasa, coloca otra encima sin quitar la primera y sigue presionando.</li>
        <li><strong>Eleva la extremidad:</strong> Si la herida está en un brazo o una pierna, elévala por encima del nivel del corazón (siempre y cuando no se sospeche de una fractura) para ayudar a reducir el flujo de sangre.</li>
      </ul>
      <h3>4. Posicionar a la persona</h3>
      <ul>
        <li>Sienta o acuesta a la persona. Las heridas profundas y la pérdida de sangre pueden causar mareos o desmayos.</li>
        <li>Si muestra signos de shock (palidez, piel fría, sudoración o respiración rápida), acuéstala boca arriba y, si es posible, elévale las piernas unos 30 centímetros, manteniéndola abrigada.</li>
      </ul>
      <h3>5. Qué NO hacer bajo ninguna circunstancia</h3>
      <ul>
        <li><strong>NO retires objetos incrustados:</strong> Si la herida tiene un cuchillo, un trozo de vidrio u otro objeto clavado, no lo saques. Retirarlo puede causar una hemorragia masiva. Presiona fuertemente alrededor del objeto para contener el sangrado y estabilizarlo.</li>
        <li><strong>NO intentes lavar una herida profunda:</strong> El flujo de agua puede reactivar o empeorar una hemorragia grave. La limpieza interna la debe realizar el personal médico.</li>
        <li><strong>NO apliques torniquetes a menos que estés capacitado:</strong> Un torniquete mal colocado puede causar daños graves. Solo se utiliza en extremidades si la presión directa no logra detener una hemorragia potencialmente mortal.</li>
      </ul>
    `
  },

  /* ── SIGNOS VITALES ── */
  'presion': {
    title:  'Presión Arterial',
    back:   'screen-vitales',
    color:  '#1565c0',
    content: `
      <h2>Presión Arterial</h2>
      <p>La presión arterial es la fuerza que ejerce la sangre contra las paredes de las arterias. Se mide en milímetros de mercurio (mmHg).</p>
      <h3>Valores Normales</h3>
      <ul>
        <li>Normal: 120/80 mmHg</li>
        <li>Elevada: 120–129 / menor de 80</li>
        <li>Hipertensión: 130/80 o más</li>
        <li>Hipotensión: menor de 90/60</li>
      </ul>
      <h3>Cómo Medirla</h3>
      <p>Siéntate en reposo 5 minutos antes de medir. Coloca el brazalete a la altura del corazón.</p>
    `
  },
  'pulso': {
    title:  'Pulso',
    back:   'screen-vitales',
    color:  '#1565c0',
    content: `
      <h2>Pulso</h2>
      <p>El pulso es la expansión y contracción rítmica de una arteria, resultado de cada latido del corazón.</p>
      <h3>Valores Normales</h3>
      <ul>
        <li>Adultos: 60–100 lpm en reposo</li>
        <li>Deportistas: puede ser menor de 60</li>
        <li>Niños: 70–120 lpm</li>
        <li>Recién nacidos: 120–160 lpm</li>
      </ul>
      <h3>Cómo Tomarlo</h3>
      <p>Coloca dos dedos sobre la arteria radial (muñeca) o carótida (cuello). Cuenta los latidos durante 60 segundos o 30 segundos y multiplica por 2.</p>
    `
  },
  'respiracion': {
    title:  'Respiración',
    back:   'screen-vitales',
    color:  '#1565c0',
    content: `
      <h2>Respiración</h2>
      <p>La frecuencia respiratoria es el número de respiraciones completas (inspiración + espiración) por minuto.</p>
      <h3>Valores Normales</h3>
      <ul>
        <li>Adultos: 12–20 rpm</li>
        <li>Niños: 20–30 rpm</li>
        <li>Lactantes: 30–60 rpm</li>
        <li>Taquipnea: más de 20 en adultos</li>
      </ul>
      <h3>Evaluación</h3>
      <p>Observa el movimiento del tórax durante 60 segundos. Una respiración normal es silenciosa y sin esfuerzo.</p>
    `
  },
  'temperatura': {
    title:  'Temperatura',
    back:   'screen-vitales',
    color:  '#1565c0',
    content: `
      <h2>Temperatura Corporal</h2>
      <p>La temperatura corporal refleja el equilibrio entre la producción y pérdida de calor del cuerpo.</p>
      <h3>Valores Normales</h3>
      <ul>
        <li>Normal: 36°C – 37.5°C</li>
        <li>Febrícula: 37.5°C – 38°C</li>
        <li>Fiebre: mayor de 38°C</li>
        <li>Hipotermia: menor de 35°C</li>
      </ul>
      <h3>Cómo Medirla</h3>
      <p>Usa termómetro digital axilar (agrega 0.5°C al resultado), oral o timpánico. En fiebre alta, aplica paños húmedos y consulta al médico.</p>
    `
  },

  /* ── PROTOCOLO ── */
  'proteger': {
    title:  'Proteger',
    back:   'screen-protocolo',
    color:  '#2e7d32',
    image: 'img/WhatsApp Image 2026-06-13 at 12.41.30 PM.jpeg',
    content: `
      <h2>Paso 1: Proteger</h2>
      <p>Antes de actuar, asegúrate de que tanto el lugar del accidente como tú mismo estén seguros.</p>
      <h3>Evalúa el Entorno</h3>
      <ul>
        <li>Señaliza el área de peligro</li>
        <li>Apaga motores de vehículos implicados</li>
        <li>Aleja a espectadores del peligro</li>
        <li>Usa guantes y protección personal</li>
      </ul>
      <h3>Principios Clave</h3>
      <p>Después de cada accidente puede persistir el peligro que lo originó. Necesitamos hacer seguro el lugar, tanto para el accidentado como para nosotros. Si hubiera algún peligro, aléjel[...]</p>
    `
  },
  'alertar': {
    title:  'Alertar',
    back:   'screen-protocolo',
    color:  '#2e7d32',
    image: 'img/WhatsApp Image 2026-06-13 at 12.41.30 PM (1).jpeg',
    content: `
      <h2>Paso 2: Alertar</h2>
      <p>Activa los servicios de emergencia lo antes posible. Cada segundo cuenta en una emergencia.</p>
      <h3>Cómo Alertar</h3>
      <ul>
        <li><strong>Dar aviso a los sistemas de emergencia:</strong> Identificándose con su nombre y número de teléfono.</li>
        <li><strong>Informar la dirección exacta:</strong> Proporcionar referencias claras para localizar el lugar rápidamente.</li>
        <li><strong>Especificar el número de personas accidentadas:</strong> Indicar cuántas víctimas hay y el tipo de lesiones que presentan.</li>
        <li><strong>Reportar peligros existentes:</strong> Advertir sobre situaciones que puedan empeorar la emergencia (fuegos, fugas de gas, cables caídos, etc.).</li>
        <li><strong>Comprobar la recepción del mensaje:</strong> No colgar el teléfono hasta estar completamente seguro de que la información fue recibida.</li>
        <li><strong>Confirmación final:</strong> Hacer que la persona que ha recibido el mensaje lo repita para evitar errores.</li>
      </ul>
      <h3>Información que debes dar</h3>
      <p>Indica si hay peligros activos: fuego, gases, tráfico. Sigue las instrucciones del operador.</p>
    `
  },
  'socorrer': {
    title:  'Socorrer',
    back:   'screen-protocolo',
    color:  '#2e7d32',
    image: 'img/WhatsApp Image 2026-06-13 at 12.41.30 PM (2).jpeg',
    content: `
      <h2>Paso 3: Socorrer</h2>
      <p>Una vez seguro el entorno y alertados los servicios, presta primeros auxilios básicos sin mover innecesariamente al herido.</p>
      <h3>Prioridades</h3>
      <ul>
        <li><strong>Mantener la calma:</strong> Actuar con serenidad para dar confianza y tranquilizar a la víctima.</li>
        <li><strong>No mover al accidentado:</strong> Evitar cualquier desplazamiento del herido a menos que exista un peligro inminente (como un incendio o derrumbe).</li>
        <li><strong>Exploración primaria:</strong> Evaluar de forma rápida y prioritaria los signos vitales (consciencia, respiración y pulso).</li>
        <li><strong>Exploración secundaria:</strong> Examinar de manera detallada al lesionado para identificar otros síntomas, heridas o dolores menos evidentes.</li>
      </ul>
      <h3>Actitud del Socorrista</h3>
      <p>Mantén la calma, habla al herido constantemente y no dejes de vigilar sus constantes vitales hasta que lleguen los servicios.</p>
    `
  },

  /* ── BOTIQUÍN ── */
  'curacion': {
    title:  'Material de Curación',
    back:   'screen-botiquin',
    color:  '#e65100',
    content: `
      <h2>Material de Curación</h2>
      <p>El material de curación es indispensable para tratar heridas y lesiones en el lugar del accidente.</p>
      <h3>Elementos Básicos</h3>
      <ul>
        <li>Gasas estériles (varios tamaños)</li>
        <li>Apósitos adhesivos (curitas)</li>
        <li>Vendas elásticas y de gasa</li>
        <li>Esparadrapo / cinta adhesiva médica</li>
        <li>Algodón hidrófilo</li>
        <li>Tijeras de punta roma</li>
        <li>Pinzas estériles</li>
      </ul>
      <h3>Mantenimiento</h3>
      <p>Revisa las fechas de caducidad regularmente. Repón los materiales usados inmediatamente. Almacena en lugar fresco y seco.</p>
    `
  },
  'limpieza': {
    title:  'Material de Limpieza y Desinfección',
    back:   'screen-botiquin',
    color:  '#e65100',
    content: `
      <h2>Limpieza y Desinfección</h2>
      <p>La correcta desinfección de heridas previene infecciones que pueden complicar seriamente la recuperación.</p>
      <h3>Elementos Básicos</h3>
      <ul>
        <li>Agua oxigenada (Peróxidode hidrógeno) = se usa para ayudar a detener pequeñas hemorragias capilares y para despegar gasas o vendas que se hayan quedado pegadas a la costra de una h[...]</li>
        <li>Toallitas antisécticas (con alcohol) = Se usan para limpiar las manos del auxiliador rápidamente si no hay agua y jabón cerca antes de tocar una herida.</li>
        <li>Clorhexidina al 0.2% = Es un antiséptico transparente que se aplica directamente sobre la herida limpia.</li>
        <li>Alcohol 70°= se utiliza para desinfectar las manos de quien va a curar o para limpiar la piel sana alrededor de la lesión (no se debe aplicar en heridas abiertas porque quema las c[...]</li>
        <li>Jabón neutro (Líquido o en barra) = se usa junto con agua limpia para lavar la zona infectada y eliminar la suciedad superficial</li>
        <li>Gel antibacterial = se usan para desinfectar las manos de ka persona que va a realizar la cura para no contaminar la lesión</li>
      </ul>
      <h3>Uso Correcto</h3>
      <p>Limpia siempre de adentro hacia afuera. Nunca uses alcohol en heridas abiertas profundas.</p>
    `
  },
  'gestion': {
    title:  'Material de Gestión y Emergencias',
    back:   'screen-botiquin',
    color:  '#e65100',
    content: `
      <h2>Material de Gestión y Emergencias</h2>
      <p>Elementos adicionales que permiten actuar con mayor eficacia ante situaciones críticas.</p>
      <h3>Elementos Básicos</h3>
      <ul>
        <li>Torniquete o banda hemostática</li>
        <li>Manta térmica de emergencia</li>
        <li>Mascarilla de RCP de bolsillo</li>
        <li>Inmovilizadores / férulas</li>
        <li>Termómetro digital</li>
        <li>Linterna con pilas de repuesto</li>
        <li>Lista de medicamentos y alergias del paciente</li>
      </ul>
      <h3>Organización</h3>
      <p>Clasifica el material por categorías y revísalo cada 6 meses. Todos en casa deben saber dónde está el botiquín.</p>
    `
  },
};

import { Component, h, Prop } from '@stencil/core';

@Component({
  styleUrl: 'logo-bzga.css',
  tag: 'ia-logo-bzga',
  shadow: true,
})
export class LogoBZGA {
  @Prop() big?: boolean;

  get styleClass() {
    return this.big ? 'logo-bzga--big' : 'logo-bzga';
  }

  render() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 104 39"
        class={this.styleClass}
      >
        <g fill="none" fill-rule="evenodd" transform="translate(.556)">
          <path fill="#FFFFFE" d="M0 39h48.48V.368H0z" clip="url(#b)" />
          <path
            fill="#231F20"
            d="M87.426 33.604c0 .512-.27.986-.817.986-.587 0-.774-.558-.774-1.067 0-.533.235-1.018.774-1.018.622 0 .817.52.817 1.099zm.913 1.6v-3.339h-.913v.477h-.015c-.228-.416-.576-.576-1.036-.576-.978 0-1.497.843-1.497 1.769 0 .98.445 1.795 1.488 1.795.42 0 .837-.179 1.045-.55h.015v.469c.008.509-.237.882-.768.882-.338 0-.628-.124-.716-.49h-.95c.049.814.85 1.146 1.538 1.146 1.606 0 1.81-.995 1.81-1.582zm-7.351-3.339v3.572h.96v-1.874c0-.727.22-1.024.74-1.024.448 0 .614.29.614.879v2.019h.961v-2.199c0-.882-.259-1.473-1.277-1.473-.404 0-.823.197-1.063.594h-.024v-.494h-.911zm-.721 3.569v-3.572h-.96v1.873c0 .725-.221 1.021-.741 1.021-.445 0-.613-.288-.613-.877v-2.017h-.96v2.2c0 .881.258 1.468 1.277 1.468a1.24 1.24 0 001.066-.594h.02v.498h.91zm-5.895-3.569v3.572h.96v-1.612c0-.628.242-1.145.942-1.145l.347.03v-.91l-.21-.035a1.24 1.24 0 00-1.114.76h-.013v-.66h-.912zm-3.445-.551h.916v-.815h-.916v.815zm1.39 0h.915v-.815h-.915v.815zm.363 2.372v.367c0 .215-.03.822-.778.822-.31 0-.587-.092-.587-.456 0-.358.268-.462.567-.527l.446-.067a.727.727 0 00.352-.14zm-2.215-.725h.957c.034-.387.27-.538.633-.538.338 0 .622.06.622.483 0 .2-.138.297-.35.355l-.363.064-.42.052c-.593.082-1.186.276-1.186 1.083 0 .732.524 1.07 1.186 1.07.426 0 .87-.116 1.172-.442l.07.346h.97c-.088-.145-.122-.468-.122-.795v-1.858c0-.855-.835-1.015-1.53-1.015-.781 0-1.585.277-1.639 1.195zm-1.672 2.476h.962v-4.938h-.962v4.938zm-3.808-4.939v4.939h.96v-1.23l.372-.366.954 1.596h1.162l-1.463-2.261 1.315-1.31h-1.133l-1.207 1.282v-2.65h-.96zm-2.118 2.022v2.917h.956V32.52h.66v-.655h-.66v-.215c0-.297.109-.409.365-.409l.352.022v-.734l-.506-.028c-.784 0-1.167.458-1.167 1.087v.277h-.576v.655h.576zm-.935 2.914v-3.572h-.958v1.873c0 .725-.222 1.021-.742 1.021-.442 0-.614-.288-.614-.877v-2.017h-.96v2.2c0 .881.26 1.468 1.279 1.468.403 0 .821-.194 1.066-.594h.019v.498h.91zm39.73-10.945h-1.557c.016-.281.19-.765.796-.765.466 0 .675.262.761.765zm-1.557.618h2.516c.065-1.1-.505-2.122-1.692-2.122-1.059 0-1.78.814-1.78 1.888 0 1.104.678 1.877 1.78 1.877.787 0 1.36-.357 1.63-1.2h-.843c-.06.219-.37.462-.756.462-.53 0-.826-.283-.855-.905zm-4.653-3.39v4.94h.96V24.78c0-.724.224-1.02.743-1.02.446 0 .614.29.614.879v2.019h.96v-2.2c0-.885-.259-1.473-1.279-1.473-.357 0-.775.192-1.015.595h-.022v-1.863h-.96zm-1.355 2.622h.934c-.06-.911-.815-1.354-1.634-1.354-1.137 0-1.784.823-1.784 1.935 0 1.07.71 1.83 1.76 1.83.917 0 1.56-.517 1.678-1.463h-.922c-.06.434-.316.725-.761.725-.6 0-.795-.615-.795-1.127 0-.526.202-1.16.816-1.16.396 0 .646.214.708.614zm-3.954-1.805h.965v-.815h-.965v.815zm0 4.123h.965V23.08h-.965v3.576zm-1.602 0h.962V21.72h-.962v4.939zm-1.181-3.573v-1.077h-.958v1.077h-.582v.656h.582v2.106c0 .709.512.85 1.097.85l.566-.035v-.767l-.303.028c-.322 0-.402-.082-.402-.415V23.74h.705v-.656h-.705zm-2.793-.55h.964v-.815h-.964v.815zm0 4.123h.964V23.08h-.964v3.576zm-1.412-2.168h-1.557c.012-.281.187-.765.795-.765.466 0 .673.262.762.765zm-1.557.618h2.513c.07-1.1-.506-2.122-1.69-2.122-1.058 0-1.78.814-1.78 1.888 0 1.104.679 1.877 1.78 1.877.787 0 1.36-.357 1.63-1.2h-.843c-.06.219-.368.462-.752.462-.533 0-.831-.283-.858-.905zm-4.65-3.39v4.94h.96V24.78c0-.724.22-1.02.74-1.02.446 0 .613.29.613.879v2.019h.96v-2.2c0-.885-.259-1.473-1.277-1.473a1.21 1.21 0 00-1.017.595h-.02v-1.863h-.96zm-2.33 2.007c.621 0 .823.552.823 1.135 0 .584-.189 1.153-.824 1.153-.59 0-.841-.586-.841-1.146 0-.59.215-1.142.841-1.142zm.837 2.473v.457h.913v-4.937h-.962l-.006 1.8c-.222-.354-.626-.532-1.04-.532-1.022 0-1.54.891-1.54 1.85 0 .99.511 1.915 1.563 1.915.444 0 .835-.166 1.058-.553h.014zm-6.353-3.113v3.574h.963V24.78c0-.724.221-1.02.741-1.02.443 0 .613.29.613.879v2.019h.96v-2.2c0-.885-.258-1.473-1.277-1.473-.403 0-.822.192-1.065.595h-.02v-.496h-.915zm-.718 3.57v-3.573h-.96v1.874c0 .724-.224 1.022-.74 1.022-.447 0-.614-.29-.614-.88v-2.016h-.96v2.2c0 .88.258 1.469 1.275 1.469.403 0 .823-.195 1.064-.594h.021v.498h.914zm-6.014-1.16h-.912c.041.945.83 1.256 1.64 1.256.794 0 1.589-.303 1.589-1.243 0-.663-.544-.868-1.105-1l-.4-.084-.35-.097c-.2-.071-.334-.175-.334-.352 0-.29.315-.332.531-.332.344 0 .627.104.654.485h.912c-.074-.88-.777-1.142-1.538-1.142-.75 0-1.516.235-1.516 1.15 0 .625.551.825 1.105.95.687.153 1.084.257 1.084.553 0 .346-.348.458-.628.458-.377 0-.726-.174-.732-.602zm-2.266-1.005H58.55c.013-.281.186-.765.794-.765.465 0 .673.262.76.765zm-1.554.618h2.512c.068-1.1-.505-2.122-1.693-2.122-1.057 0-1.778.814-1.778 1.888 0 1.104.68 1.877 1.778 1.877.79 0 1.362-.357 1.634-1.2h-.845c-.059.219-.368.462-.755.462-.53 0-.83-.283-.853-.905zm1.596-10.942v3.572h.96v-1.61c0-.63.245-1.147.943-1.147l.347.035v-.914l-.21-.032c-.465 0-.937.309-1.113.758h-.011v-.662h-.916zm-3.51-.55h.915v-.814h-.915v.814zm1.389 0h.916v-.814h-.916v.814zm1.401 4.119v-3.572h-.96v1.873c0 .727-.222 1.021-.74 1.021-.445 0-.615-.287-.615-.875v-2.019h-.96v2.198c0 .883.26 1.47 1.279 1.47.403 0 .82-.192 1.064-.593h.02v.497h.912zM55.204 5.836V4.678h.994c.374 0 .726.098.726.566 0 .417-.276.592-.647.592h-1.073zm0 2.092v-1.36h1.155c.452 0 .762.205.762.709 0 .512-.363.651-.782.651h-1.135zm-1.06-4.095v4.939h2.337c.869 0 1.699-.432 1.699-1.433 0-.616-.296-1.078-.883-1.25.417-.207.652-.545.652-1.03 0-.92-.618-1.226-1.536-1.226h-2.269zm7.784 4.936V5.193h-.96V7.07c0 .725-.222 1.025-.742 1.025-.445 0-.613-.29-.613-.88v-2.02h-.96v2.2c0 .882.258 1.47 1.276 1.47.407 0 .823-.193 1.067-.593h.02v.498h.912zm.72-3.573v3.576h.96V6.898c0-.725.221-1.024.742-1.024.445 0 .612.291.612.877v2.02h.96v-2.2c0-.884-.259-1.468-1.274-1.468-.407 0-.825.19-1.068.593h-.02v-.5h-.912zm5.648.642c.622 0 .823.554.823 1.136 0 .586-.19 1.15-.823 1.15-.591 0-.84-.586-.84-1.145 0-.587.215-1.141.84-1.141zm.837 2.474v.457h.912V3.833h-.96l-.006 1.798c-.221-.35-.627-.528-1.039-.528-1.021 0-1.541.888-1.541 1.85 0 .986.512 1.911 1.562 1.911.445 0 .838-.165 1.058-.552h.014zm3.84-1.708h-1.557c.014-.28.19-.766.795-.766.466 0 .676.264.762.766zm-1.557.616h2.516c.064-1.096-.506-2.117-1.692-2.117-1.06 0-1.78.815-1.78 1.885 0 1.106.68 1.876 1.78 1.876.789 0 1.36-.358 1.63-1.2h-.841c-.062.22-.372.46-.756.46-.533 0-.827-.28-.857-.904zm3.688.387h-.911c.04.945.829 1.257 1.64 1.257.793 0 1.589-.301 1.589-1.242 0-.664-.545-.87-1.105-1.001l-.402-.084-.347-.097c-.201-.073-.335-.174-.335-.35 0-.292.315-.333.53-.333.345 0 .628.101.654.482h.912c-.074-.874-.776-1.136-1.538-1.136-.748 0-1.518.232-1.518 1.143 0 .63.554.83 1.107.955.687.15 1.084.255 1.084.552 0 .347-.348.457-.627.457-.376 0-.727-.176-.733-.603zm2.522.422v.743h3.209v-.743h-1.946l1.815-2.092v-.744h-2.94v.744h1.68L77.625 8.03zm5.793-1.425h-1.557c.011-.28.188-.766.796-.766.464 0 .673.264.761.766zm-1.557.616h2.514c.068-1.096-.505-2.117-1.693-2.117-1.058 0-1.78.815-1.78 1.885 0 1.106.681 1.876 1.78 1.876.79 0 1.364-.358 1.633-1.2h-.843c-.062.22-.372.46-.756.46-.534 0-.829-.28-.855-.904zm3.076-2.024v3.576h.96V6.898c0-.725.22-1.024.741-1.024.446 0 .612.291.612.877v2.02h.961v-2.2c0-.884-.26-1.468-1.275-1.468-.407 0-.824.19-1.066.593h-.022v-.5h-.911zm5.076 0V4.123h-.957v1.073h-.58v.656h.58V7.96c0 .711.511.848 1.1.848l.561-.03v-.769l-.3.025c-.322 0-.404-.081-.404-.412v-1.77h.704v-.656h-.704zm1.156 0v3.576h.96V7.16c0-.63.241-1.148.943-1.148l.346.036v-.913l-.21-.032c-.466 0-.937.308-1.114.755h-.014v-.662h-.911zm4.662 1.824v.365c0 .216-.031.825-.777.825-.31 0-.589-.09-.589-.457 0-.358.27-.462.57-.524l.444-.066c.142-.03.267-.071.352-.143zm-2.215-.725h.959c.034-.386.268-.538.635-.538.334 0 .618.061.618.482 0 .201-.136.298-.345.356l-.364.064-.424.049c-.593.084-1.184.28-1.184 1.086 0 .734.526 1.07 1.184 1.07.424 0 .87-.117 1.174-.443l.068.348h.97c-.088-.147-.12-.47-.12-.795v-1.86c0-.855-.836-1.011-1.532-1.011-.782 0-1.585.273-1.639 1.192zm3.934 2.477h.963V3.833h-.963v4.939zm4.06-2.168h-1.56c.015-.28.191-.766.798-.766.467 0 .673.264.762.766zm-1.56.616h2.517c.067-1.096-.506-2.117-1.692-2.117-1.06 0-1.779.815-1.779 1.885 0 1.106.68 1.876 1.78 1.876.787 0 1.36-.358 1.63-1.2h-.843c-.06.22-.37.46-.755.46-.53 0-.83-.28-.857-.904zm-45.795 7.6v2.918h.957V14.82h.661v-.654h-.661v-.212c0-.3.108-.412.364-.412l.354.022v-.73l-.507-.03c-.785 0-1.168.457-1.168 1.085v.277h-.577v.654h.577zm2.232 10.004c0 .51-.27.987-.815.987-.587 0-.776-.559-.776-1.07 0-.532.234-1.016.776-1.016.62 0 .815.52.815 1.1zm.912 1.6v-3.34h-.912v.475h-.015c-.23-.412-.579-.573-1.036-.573-.98 0-1.5.845-1.5 1.769 0 .98.447 1.795 1.491 1.795.418 0 .839-.178 1.045-.552h.015v.47c.006.51-.236.885-.77.885-.335 0-.624-.125-.712-.491h-.952c.046.815.85 1.145 1.537 1.145 1.603 0 1.809-.994 1.809-1.582zm-2.037 7.106l.625-1.814h.015l.604 1.814h-1.244zm.1-3.031l-1.826 4.939h1.071l.378-1.1h1.8l.363 1.1h1.098l-1.8-4.939h-1.084z"
            clip="url(#b)"
          />
          <path
            fill="#A7A9AB"
            d="M9.447 29.801H5.644v3.41h3.283c.835 0 2.103-.04 2.103-1.848 0-1.485-1.061-1.562-1.583-1.562zm18.963-2.008c-.653 0-1.378.292-1.864 1.104a4.24 4.24 0 00-.485 1.92c0 .815.28 1.54.485 1.919.486.816 1.211 1.104 1.864 1.104.652 0 1.378-.288 1.863-1.104a4.272 4.272 0 00.483-1.918c0-.817-.28-1.542-.483-1.921-.485-.812-1.211-1.104-1.863-1.104zm14.94 7.681l-.931-2.647H37.39l-.95 2.647h-2.85l4.732-13.205h3.221l4.658 13.205H43.35zM23.864 24.533l-6.95 8.676h6.81v2.265h-9.935V33.21l6.795-8.676H13.79V22.27h10.075v2.264zM12.278 34.567c-.931.78-2.439.907-3.297.907H2.85V22.27h5.61c4.638 0 4.9 2.916 4.9 3.46 0 .795-.299 1.922-1.287 2.716.802.6 1.62 1.757 1.62 3.333 0 .687-.203 1.774-1.414 2.789zM.012 0L0 39h25.677l-.116-.04c-1.1-.505-1.677-1.364-1.677-2.347h2.739c0 .56.632 1.105 1.824 1.105 1.154 0 2.29-.8 2.272-1.883v-1.378c-.782.835-1.34 1.43-2.719 1.43-1.417 0-2.086-.27-2.905-1.086-1.939-1.917-1.77-6.228.11-8.129.503-.488 1.435-1.27 2.832-1.178.799.047 1.288.252 1.666.548.189.152.353.322.513.508l.503.592v-1.487h2.442v10.072c0 1.213-.635 2.354-1.586 2.95l-.557.295-.085.028h17.26l.01-39H.012zm10.683 26.036c0-1.14-.765-1.506-1.731-1.506h-3.32v3.013h3.17c1.191 0 1.88-.454 1.88-1.507zm27.57 4.53h3.484l-1.806-5.125-1.677 5.124z"
          />
        </g>
      </svg>
    );
  }
}

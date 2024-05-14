Автоматизация дома с помощью Raspberry PI
==========
Автоматизация дома с помощью Raspberry PI 3, Node JS, Raspbian OS & ms-gpio.js

## Настройка

### Аппаратное обеспечение
1. Raspberry Pi 3 модели B, с картой памяти объемом не менее 16 ГБ, которая должна быть предварительно загружена с Raspbian OS. Чтобы установить Raspbian OS на карту памяти, вы можете обратиться к [этому веб-сайту] (https://www.raspberrypi.org/learning/software-guide/quickstart)
2. 2-канальный релейный модуль 5V 10A <br/>
<img title="5v 2 Channel Relay Switch" width="250" alt="Screenshot 5v 2 Channel Relay Switch" src="https://github.com/mayankmania/smarthome/raw/master/UIPics/relayswitch.jpg"/> <br/>
Релейный переключатель, показанный на рисунке выше, представляет собой двухканальный релейный модуль, с его помощью можно управлять только двумя электрическими устройствами. Для управления большим количеством устройств вы можете выбрать 4,6-или 8-канальный релейный переключатель<br/>
3. Создание схемы, каждое устройство управляется набором контактов GPIO и каналом релейного переключения. В зависимости от количества электрических устройств, которыми мы хотим управлять, это количество контактов GPIO должно быть подключено к каналу / входу на релейном переключателе. Следующим шагом будет создание цепи между релейным выключателем и электрическим устройством, это можно сделать, продолжая пропускать ток под напряжением как на входе, так и на выходе, поступающем от релейного выключателя к электрическому устройству.
На приведенной ниже схеме показано соединение между Raspberry PI 3, релейным выключателем и электроприбором 
<br/>
<img title="Cicuit Diagram" alt="Cicuit Diagram" src="https://github.com/mayankmania/smarthome/blob/master/UIPics/circuit.png"/> <br/><img title="5v 2 Channel Relay Switch" alt="Screenshot 5v 2 Channel Relay Switch" src="https://github.com/mayankmania/smarthome/blob/master/UIPics/rs_2.jpg"/> <br/>
Пожалуйста, обратите внимание, как мы создали схему между ** релейным выключателем ** и ** электроприбором **. Вам необходимо убедиться, что ** провод под напряжением ** от вилки идет непосредственно к электрическому контакту ** Общего / среднего ** реле; и он выходит ** либо ** из ** Нормально подключенного **, либо ** Нормально разомкнутого ** электрического контакта, но не из обоих одновременно. Также ** нейтральный провод ** от вилки должен быть напрямую подключен к электроприбору.<br/>

##### PIN-код GPIO по умолчанию и сопоставление устройств
1. <b>Примечание</b>: При взаимодействии с PIN-кодом GPIO необходимо передавать PIN-код Raspberry Pi (платный / физический). Пожалуйста, смотрите [эту страницу](http://elinux.org/RPi_Low-level_peripherals) для получения более подробной информации.
2. Каждое устройство управляется определенным выводом GPIO, следовательно, настройка электрического устройства и сопоставление выводов должны быть выполнены заранее
3. Текущее приложение показывает демонстрационную версию, которая может работать с 4 устройствами, но ее можно расширить на большее количество устройств
4. Отображение контактов GPIO для 4 устройств приведено следующим образом:
 * Физический Pin-код 15 соответствует GPIO22 => вентилятор
 * Физический Pin-код 16 соответствует GPIO23 => лампа накаливания
 * Физический Pin-код 18 соответствует GPIO24 => стиральная машина
 * Физический Pin-код 19 сопоставляется с GPIO10 => Телевизор
 <br/><img title="GPIO Numbering" alt="GPIO Numbering" src="https://github.com/mayankmania/smarthome/blob/master/UIPics/pin_numbering.png"/> <br/>
Как показано на рисунке выше, мы всегда будем управлять GPIO, используя его физический номер, выделенный посередине кружком

### Программное обеспечение
1. Node.js 
2. MS-GPIO node module
3. HTML5/Bootstrap
4. Linux/Rasbian
5. Putty можно использовать для удаленного подключения терминального сеанса к Raspberry PI
6. Статический IP-адрес Raspberry PI: назначьте статический IP-адрес 192.168.0.7 устройству Raspberry PI. после этого к приложениюsmarthome можно получить доступ по фиксированному IP-адресу с любого устройства в локальной сети
 
### Права доступа
1. Права суперпользователя / root

## Запуск проекта
1. Запустите свое устройство Raspberry PI
2. Для работы с Raspberry PI вам необходимо иметь доступ от имени суперпользователя, для того же можно использовать команду sudo -i
3. Перейдите в папку "Рабочий стол", клонируйте / загрузите этот проект на свое устройство Raspberry PI
 ```
 cd /home/pi/Desktop
   
 git clone https://github.com/mayankmania/smarthome.git
 ```
4. Выполните следующие команды в указанном порядке.
 
 **Перейдите в папку smarthome**
 ```
 cd /home/pi/Desktop/smarthome
 ```
 
 **Выполните приведенную ниже команду, чтобы установить пакеты npm, необходимые для этого проекта**
 
 ```
 npm install
 ```
 
 **Выполните приведенную ниже команду для запуска приложения**
 
 ```
 node index.js
 ```
 Если все работает хорошо, ваше приложение должно быть размещено локально на порту 9000
5. С любого устройства (мобильного / ПК), подключенного к той же локальной сети, что и устройство Raspberry, введите http://192.168.0.7:9000 в браузере. Он должен представлять пользовательский интерфейс на основе HTML, который предоставит вам список устройств с указанием их текущего состояния (запущено / остановлено). Теперь вы можете управлять каждым устройством, нажимая на кнопки воспроизведения и остановки, расположенные перед каждым устройством
<br/><br/>
**Мобильная версия**
</br></br>
<img title="Mobile View" alt="Mobile View" src="https://github.com/mayankmania/smarthome/blob/master/UIPics/mobile.png"/> 
<br/></br>
**Вид с рабочего стола**
<br/></br>
<img title="Desktop View" alt="Desktop View" src="https://github.com/mayankmania/smarthome/blob/master/UIPics/Desktop.png"/>

## Smarthome в действии
[![smarthome](http://img.youtube.com/vi/KzkG1HKcA7Y/0.jpg)](https://youtu.be/KzkG1HKcA7Y "click to view it in action")

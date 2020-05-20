<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="pt_BR" sourcelanguage="en">
<context>
    <name>Button</name>
    <message>
        <location filename="../multi_criteria_dialog.py" line="74"/>
        <source>Evaluate</source>
        <translation>Avaliar</translation>
    </message>
    <message>
        <location filename="../multi_criteria_dialog.py" line="83"/>
        <source>Next</source>
        <translation>Próximo</translation>
    </message>
</context>
<context>
    <name>Dialog</name>
    <message>
        <location filename="../multi_criteria_dialog_base.ui" line="26"/>
        <source>Weighted Multi-Criteria Analysis - WMCA</source>
        <translation>Análise Multicritério Ponderada – AMP</translation>
    </message>
    <message>
        <location filename="../multi_criteria_dialog_base.ui" line="54"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Select &lt;span style=&quot; font-weight:600;&quot;&gt;Raster&lt;/span&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Selecione &lt;span style=&quot; font-weight:600;&quot;&gt;Raster&lt;/span&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../multi_criteria_dialog_base.ui" line="70"/>
        <source>&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.0//EN&quot; &quot;http://www.w3.org/TR/REC-html40/strict.dtd&quot;&gt;
&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;MS Shell Dlg 2&apos;; font-size:8.25pt; font-weight:400; font-style:normal;&quot;&gt;
&lt;p align=&quot;justify&quot; style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Instructions:&lt;/span&gt;&lt;/p&gt;
&lt;p align=&quot;justify&quot; style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p align=&quot;justify&quot; style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;- Select &lt;span style=&quot; text-decoration: underline;&quot;&gt;only&lt;/span&gt; single band&lt;span style=&quot; font-weight:600;&quot;&gt; rasters&lt;/span&gt;, uploaded to the QGIS Layers, in&lt;span style=&quot; font-weight:600;&quot;&gt; .tif&lt;/span&gt; format, &lt;span style=&quot; text-decoration: underline;&quot;&gt;with the same noData value&lt;/span&gt; in all rasters;&lt;/p&gt;
&lt;p align=&quot;justify&quot; style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p align=&quot;justify&quot; style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;- Rasters must have the same xy and pixel size;&lt;/p&gt;
&lt;p align=&quot;justify&quot; style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p align=&quot;justify&quot; style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;- To remove a created line just select it (or a cell) and press the &amp;quot;Remove&amp;quot; button;&lt;/p&gt;
&lt;p align=&quot;justify&quot; style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p align=&quot;justify&quot; style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;- Enter the weight of each raster in the &amp;quot;Weight&amp;quot; column, with &amp;quot;.&amp;quot; (dot) as a decimal separator (eg 0.3);&lt;/p&gt;
&lt;p align=&quot;justify&quot; style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p align=&quot;justify&quot; style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;- The weight must be different from 0 (zero) and the sum of the weights must be equal to 1;&lt;/p&gt;
&lt;p align=&quot;justify&quot; style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p align=&quot;justify&quot; style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;- To group classes from &lt;span style=&quot; font-weight:600;&quot;&gt;1 raster&lt;/span&gt;, just assign weight 1 to the raster (on this screen) and assign the same grade (next screen) to the classes to be grouped.&lt;/p&gt;
&lt;p align=&quot;justify&quot; style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p align=&quot;justify&quot; style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;NOTE:&lt;/span&gt; Avoid using a raster with a large number of classes (many different pixel values) as loading such values ​​to be reclassified on the next screen becomes time consuming and impractical.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.0//EN&quot; &quot;http://www.w3.org/TR/REC-html40/strict.dtd&quot;&gt;
&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;MS Shell Dlg 2&apos;; font-size:8.25pt; font-weight:400; font-style:normal;&quot;&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Instruções:&lt;/span&gt;&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-weight:600;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p align=&quot;justify&quot; style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;- &lt;/span&gt;Selecionar &lt;span style=&quot; text-decoration: underline;&quot;&gt;apenas&lt;/span&gt; &lt;span style=&quot; font-weight:600;&quot;&gt;rasters &lt;/span&gt;banda única, carregados aos Layers do QGIS, em formato &lt;span style=&quot; font-weight:600;&quot;&gt;.tif&lt;/span&gt;, com o &lt;span style=&quot; text-decoration: underline;&quot;&gt;mesmo valor de noData&lt;/span&gt; em todos os rasters da análise;&lt;/p&gt;
&lt;p align=&quot;justify&quot; style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p align=&quot;justify&quot; style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;- Os rasters devem possuir o mesmo tamanho xy e de pixel ;&lt;/p&gt;
&lt;p align=&quot;justify&quot; style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p align=&quot;justify&quot; style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;- Para remover uma linha criada basta selecioná-la (ou uma célula) e apertar o botão &amp;quot;Remover&amp;quot;;&lt;/p&gt;
&lt;p align=&quot;justify&quot; style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p align=&quot;justify&quot; style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;- Inserir o peso de cada raster na coluna &amp;quot;Peso&amp;quot;, com &amp;quot;.&amp;quot; (ponto) como separador decimal (ex: 0.3);&lt;/p&gt;
&lt;p align=&quot;justify&quot; style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p align=&quot;justify&quot; style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;- O peso deve ser diferente de 0 (zero) e a soma dos pesos deve ser igual a 1;&lt;/p&gt;
&lt;p align=&quot;justify&quot; style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p align=&quot;justify&quot; style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;- Para agrupar classes de &lt;span style=&quot; font-weight:600;&quot;&gt;1 raster&lt;/span&gt; basta atribuir o peso 1 ao raster (nesta tela) e atribuir mesma nota (próxima tela) para as classes a serem agrupadas.&lt;/p&gt;
&lt;p align=&quot;justify&quot; style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p align=&quot;justify&quot; style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;OBS:&lt;/span&gt; Evite utilizar raster com grande número de classes (muitos valores de pixel diferentes) pois carregar tais valores a serem reclassificados na próxima tela se torna moroso e pouco prático.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../multi_criteria_dialog_base.ui" line="120"/>
        <source>Raster</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../multi_criteria_dialog_base.ui" line="125"/>
        <source>Weight</source>
        <translation>Peso</translation>
    </message>
    <message>
        <location filename="../multi_criteria_dialog_base.ui" line="139"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Enter the &lt;span style=&quot; font-weight:600;&quot;&gt;Weight&lt;/span&gt; of the respective raster:&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Insira o &lt;span style=&quot; font-weight:600;&quot;&gt;Peso&lt;/span&gt; do respectivo raster:&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../multi_criteria_dialog_base.ui" line="155"/>
        <source>Load</source>
        <translation>Adicionar</translation>
    </message>
    <message>
        <location filename="../multi_criteria_dialog_base.ui" line="168"/>
        <source>Remove</source>
        <translation>Remover</translation>
    </message>
    <message>
        <location filename="../multi_criteria_dialog_base.ui" line="193"/>
        <source>&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.0//EN&quot; &quot;http://www.w3.org/TR/REC-html40/strict.dtd&quot;&gt;
&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;MS Shell Dlg 2&apos;; font-size:8.25pt; font-weight:400; font-style:normal;&quot;&gt;
&lt;p align=&quot;justify&quot; style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Instructions:&lt;/span&gt;&lt;/p&gt;
&lt;p align=&quot;justify&quot; style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p align=&quot;justify&quot; style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;- Each tab represents a raster that will be used in the analysis;&lt;/p&gt;
&lt;p align=&quot;justify&quot; style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p align=&quot;justify&quot; style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;- To delete a tab, remove the raster (line) on the previous page (screen);&lt;/p&gt;
&lt;p align=&quot;justify&quot; style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p align=&quot;justify&quot; style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;- Each class (line) corresponds to a pixel value. Add the grade value in its respective column;&lt;/p&gt;
&lt;p align=&quot;justify&quot; style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p align=&quot;justify&quot; style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;- The grades must be values ​​from 0 to 10;&lt;/p&gt;
&lt;p align=&quot;justify&quot; style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p align=&quot;justify&quot; style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;- Check the &amp;quot;Not Calculate&amp;quot; box to disregard this class in the analysis. It is unnecessary to enter a grade for this class. The final raster will have the pixel value -9998 in this class;&lt;/p&gt;
&lt;p align=&quot;justify&quot; style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p align=&quot;justify&quot; style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;- To group classes from &lt;span style=&quot; font-weight:600;&quot;&gt;1 raster&lt;/span&gt; (weight 1 previous screen) the same grade must be assigned (on this screen) to the classes to be grouped. If you want to transform a class into noData, just type grade -9999&lt;span style=&quot; font-weight:600;&quot;&gt; if&lt;/span&gt; &lt;span style=&quot; text-decoration: underline;&quot;&gt;this is the value of noData used (or if you have none) and have a weight of 1 on the previous screen&lt;/span&gt;;&lt;/p&gt;
&lt;p align=&quot;justify&quot; style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p align=&quot;justify&quot; style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;- Choose the output directory and file name for the analysis result.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.0//EN&quot; &quot;http://www.w3.org/TR/REC-html40/strict.dtd&quot;&gt;
&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;MS Shell Dlg 2&apos;; font-size:8.25pt; font-weight:400; font-style:normal;&quot;&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Instruções:&lt;/span&gt;&lt;/p&gt;
&lt;p align=&quot;justify&quot; style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-weight:600;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p align=&quot;justify&quot; style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;-&lt;/span&gt; Cada aba representa um raster que será utilizado na análise;&lt;/p&gt;
&lt;p align=&quot;justify&quot; style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-weight:600;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p align=&quot;justify&quot; style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;-&lt;/span&gt; Para deletar uma aba, deve-se remover o raster (linha) na página (tela) anterior;&lt;/p&gt;
&lt;p align=&quot;justify&quot; style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p align=&quot;justify&quot; style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;- Cada classe (linha) corresponde a um valor de pixel. Adicione o valor da nota em sua respectiva coluna;&lt;/p&gt;
&lt;p align=&quot;justify&quot; style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p align=&quot;justify&quot; style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;- As notas devem ser valores de 0 a 10;&lt;/p&gt;
&lt;p align=&quot;justify&quot; style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p align=&quot;justify&quot; style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;- Marque a caixa &amp;quot;Não Calcular&amp;quot; para desconsiderar tal classe na análise. Não é necessário preencher a nota desta classe. O raster final terá nessa classe o valor de pixel -9998;&lt;/p&gt;
&lt;p align=&quot;justify&quot; style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p align=&quot;justify&quot; style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;- Para agrupar classes de &lt;span style=&quot; font-weight:600;&quot;&gt;1 raster&lt;/span&gt; (peso 1 na tela anterior) deve-se atribuir a mesma nota (nesta tela) para as classes a serem agrupadas. Caso queira transformar uma classe em noData, basta dar nota igual a -9999 &lt;span style=&quot; font-weight:600; text-decoration: underline;&quot;&gt;se&lt;/span&gt;&lt;span style=&quot; text-decoration: underline;&quot;&gt; este for o valor de noData utilizado (ou se não tiver nenhum) e ter peso 1 na tela anterior&lt;/span&gt;;&lt;/p&gt;
&lt;p align=&quot;justify&quot; style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p align=&quot;justify&quot; style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;- Escolha o diretório e o nome do arquivo de saída referente ao resultado da análise.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../multi_criteria_dialog_base.ui" line="228"/>
        <source>Tab 1</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../multi_criteria_dialog_base.ui" line="233"/>
        <source>Tab 2</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../multi_criteria_dialog_base.ui" line="247"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Enter the &lt;span style=&quot; font-weight:600;&quot;&gt;Grade&lt;/span&gt; of each class:&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Insira a &lt;span style=&quot; font-weight:600;&quot;&gt;Nota&lt;/span&gt; de cada classe:&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../multi_criteria_dialog_base.ui" line="263"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Select &lt;span style=&quot; font-weight:600;&quot;&gt;Output&lt;/span&gt;:&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Selecione a &lt;span style=&quot; font-weight:600;&quot;&gt;Saída&lt;/span&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../multi_criteria_dialog_base.ui" line="276"/>
        <source>...</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../multi_criteria_dialog_base.ui" line="301"/>
        <source>&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.0//EN&quot; &quot;http://www.w3.org/TR/REC-html40/strict.dtd&quot;&gt;
&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;MS Shell Dlg 2&apos;; font-size:8pt; font-weight:400; font-style:normal;&quot;&gt;
&lt;p align=&quot;center&quot; style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;span style=&quot; font-family:&apos;Arial,sans-serif&apos;; font-size:12pt; font-weight:600;&quot;&gt;Weighted Multi-Criteria Analysis - WMCA&lt;/span&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.0//EN&quot; &quot;http://www.w3.org/TR/REC-html40/strict.dtd&quot;&gt;
&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;MS Shell Dlg 2&apos;; font-size:8pt; font-weight:400; font-style:normal;&quot;&gt;
&lt;p align=&quot;center&quot; style=&quot; margin-top:12px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;span style=&quot; font-size:14pt; font-weight:600;&quot;&gt;Análise Multicritério Ponderada - &lt;/span&gt;&lt;span style=&quot; font-size:14pt; font-weight:600;&quot;&gt;AMP&lt;/span&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../multi_criteria_dialog_base.ui" line="321"/>
        <source>Next</source>
        <translation>Próximo</translation>
    </message>
    <message>
        <location filename="../multi_criteria_dialog_base.ui" line="350"/>
        <source>Previous</source>
        <translation>Voltar</translation>
    </message>
</context>
<context>
    <name>Message to user</name>
    <message>
        <location filename="../multi_criteria.py" line="199"/>
        <source>Load Rasters to QGIS first</source>
        <translation>Primeiro adicione Rasters ao QGIS</translation>
    </message>
    <message>
        <location filename="../multi_criteria.py" line="248"/>
        <source>Missing Information</source>
        <translation>Informação faltando</translation>
    </message>
    <message>
        <location filename="../multi_criteria.py" line="216"/>
        <source>The raster has more than 100 classes. Use the &quot;Reclassify by table&quot; from the QGIS tools to decrease the number of classes</source>
        <translation>O raster possui mais de 100 classes. Utilize o &quot;Reclassify by table&quot; das tools do QGIS para diminuir o número de classes</translation>
    </message>
    <message>
        <location filename="../multi_criteria.py" line="220"/>
        <source>The raster has more than 50 classes and may take some time to load. It&apos;s possible to group classes of a raster following the instructions on the right, or by using the &quot;Reclassify by table&quot; from the QGIS tools</source>
        <translation>O raster possui mais de 50 classes e pode demorar para ser carregado. É possivel agrupar classes de 1 raster, seguindo as instruções à direita ou utilize o &quot;Reclassify by table&quot; das tools do QGIS</translation>
    </message>
    <message>
        <location filename="../multi_criteria.py" line="247"/>
        <source>Select only rasters</source>
        <translation>Selecione apenas Rasters</translation>
    </message>
    <message>
        <location filename="../multi_criteria_dialog.py" line="101"/>
        <source>Fill in the space for the weights</source>
        <translation>Preencha o espaço destinado ao peso</translation>
    </message>
    <message>
        <location filename="../multi_criteria_dialog.py" line="163"/>
        <source>Missing information or invalid</source>
        <translation>Informação faltando ou inválida</translation>
    </message>
    <message>
        <location filename="../multi_criteria_dialog.py" line="139"/>
        <source>The decimal separator must be &quot;.&quot;</source>
        <translation>O separador decimal deve ser &quot;.&quot;</translation>
    </message>
    <message>
        <location filename="../multi_criteria_dialog.py" line="150"/>
        <source>Don&apos;t use strings, only numbers</source>
        <translation>Não use strings, apenas números</translation>
    </message>
    <message>
        <location filename="../multi_criteria_dialog.py" line="111"/>
        <source>The weight must be different from zero</source>
        <translation>O peso deve ser diferente de zero</translation>
    </message>
    <message>
        <location filename="../multi_criteria_dialog.py" line="119"/>
        <source>The sum of the weights must be 1</source>
        <translation>A soma dos pesos deve ser 1</translation>
    </message>
    <message>
        <location filename="../multi_criteria_dialog.py" line="145"/>
        <source>Fill the space for the grades or check &quot;Not Calculate&quot;</source>
        <translation>&quot;Preencha o espaço destinado à nota ou marque &quot;Não Calcular&quot;</translation>
    </message>
    <message>
        <location filename="../multi_criteria_dialog.py" line="156"/>
        <source>The grades must be from 0 (zero) up to 10 (ten), or -9999</source>
        <translation>As notas devem ser de 0 (zero) a 10 (dez), ou -9999</translation>
    </message>
    <message>
        <location filename="../multi_criteria_dialog.py" line="162"/>
        <source>Select the output folder path and the output raster&apos;s name</source>
        <translation>Escolha endereço e nome do raster de saída</translation>
    </message>
</context>
<context>
    <name>MultiCriteria</name>
    <message>
        <location filename="../multi_criteria.py" line="187"/>
        <source>&amp;Weighted Multi-Criteria Analysis - WMCA</source>
        <translation>&amp;Análise Multicritério Ponderada – AMP</translation>
    </message>
    <message>
        <location filename="../multi_criteria.py" line="174"/>
        <source>Weighted Multi-Criteria Analysis - WMCA</source>
        <translation>Análise Multicritério Ponderada – AMP</translation>
    </message>
</context>
<context>
    <name>Tab</name>
    <message>
        <location filename="../multi_criteria.py" line="241"/>
        <source>Not Calculate</source>
        <translation>Não Calcular</translation>
    </message>
</context>
<context>
    <name>Tab title</name>
    <message>
        <location filename="../multi_criteria.py" line="232"/>
        <source>Original Value</source>
        <translation>Valor Original</translation>
    </message>
    <message>
        <location filename="../multi_criteria.py" line="234"/>
        <source>Grade</source>
        <translation>Nota</translation>
    </message>
    <message>
        <location filename="../multi_criteria.py" line="236"/>
        <source>Disregard</source>
        <translation>Desconsiderar</translation>
    </message>
</context>
<context>
    <name>output</name>
    <message>
        <location filename="../multi_criteria.py" line="317"/>
        <source>Select the output folder and the raster name</source>
        <translation>Selecione a pasta de saída e o nome do raster</translation>
    </message>
</context>
</TS>

# -*- coding: utf-8 -*-
"""
/***************************************************************************
 MultiCriteriaDialog
                                 A QGIS plugin
 Displays raster’s pixels values to the user, making possible to assign weights
 for each raster and grades for each class within each raster.
 Generated by Plugin Builder: http://g-sherman.github.io/Qgis-Plugin-Builder/
                             -------------------
        begin                : 2019-07-03
        git sha              : $Format:%H$
        copyright            : (C) 2019 by Carvalho Neto, R.M./ UFSM and Benedetti, A.C.P./ UFSM
        email                : romariocarvalho@hotmail.com
 ***************************************************************************/

/***************************************************************************
 *                                                                         *
 *   This program is free software; you can redistribute it and/or modify  *
 *   it under the terms of the GNU General Public License as published by  *
 *   the Free Software Foundation; either version 2 of the License, or     *
 *   (at your option) any later version.                                   *
 *                                                                         *
 ***************************************************************************/
"""

import os

from PyQt5.QtCore import QCoreApplication
from PyQt5 import uic
from PyQt5 import QtWidgets
from PyQt5.QtWidgets import QMessageBox


# This loads your .ui file so that PyQt can populate your plugin with the elements from Qt Designer
FORM_CLASS, _ = uic.loadUiType(os.path.join(
    os.path.dirname(__file__), 'multi_criteria_dialog_base.ui'))


class MultiCriteriaDialog(QtWidgets.QDialog, FORM_CLASS):
    def __init__(self, parent=None):
        """Constructor."""
        super(MultiCriteriaDialog, self).__init__(parent)
        # Set up the user interface from Designer through FORM_CLASS.
        # After self.setupUi() you can access any designer object by doing
        # self.<objectname>, and you can use autoconnect slots - see
        # http://qt-project.org/doc/qt-4.8/designer-using-a-ui-file.html
        # #widgets-and-dialogs-with-auto-connect
        self.setupUi(self)
        
        #------- Added by me --------------
        self.update_prev_next_buttons()
        self.stackedWidget.currentChanged.connect(self.update_prev_next_buttons)
        self.next_button.clicked.connect(self.__next__)
        self.prev_button.clicked.connect(self.prev)
        self.next_button.setFocus()
        
    def update_prev_next_buttons(self):
        i = self.stackedWidget.currentIndex()
        self.prev_button.setEnabled(i > 0)  # to make the button available only when is not the first page

    def __next__(self):
        i = self.stackedWidget.currentIndex()
        if i < 2:
            ok = True
            if i == 0:
                ok = self.validate_entries()  #first page. self.validate_entries must return TRUE
            if i == 1:
                ok = self.validate_about() # second page

            if ok:
                if i < 1:
                    self.stackedWidget.setCurrentIndex(i + 1)
                    if i == 0:
                        self.next_button.setText(QCoreApplication.translate('Button','Evaluate'))

                else:
                    self.accept()

    def prev(self):
        i = self.stackedWidget.currentIndex()
        self.stackedWidget.setCurrentIndex(i - 1)
        if i-1 != 1:
            self.next_button.setText(QCoreApplication.translate('Button','Next'))
            
    def validate_entries(self):
        listaRasters = []
        self.contRow = self.tableWidget.rowCount()
        for row in range(self.contRow):
            pesoColuna1 = self.tableWidget.item(row,1)
            if pesoColuna1 == None:
                message = QCoreApplication.translate('Message to user','Fill in the space for the weights')
                QMessageBox.warning(self, QCoreApplication.translate('Message to user','Missing information or invalid'),message)
                return False
                break
            elif "," in pesoColuna1.text():
                message = QCoreApplication.translate('Message to user','The decimal separator must be "."')
                QMessageBox.warning(self, QCoreApplication.translate('Message to user','Missing information or invalid'), message)
                return False
                break
            elif pesoColuna1.text() == "":
                message = QCoreApplication.translate('Message to user','Fill in the space for the weights')
                QMessageBox.warning(self, QCoreApplication.translate('Message to user','Missing information or invalid'), message)
                return False
                break
            elif any(letra.isalpha() for letra in pesoColuna1.text()):
                message = QCoreApplication.translate('Message to user','Don\'t use strings, only numbers')
                QMessageBox.warning(self, QCoreApplication.translate('Message to user','Missing information or invalid'), message)
                return False
                break
            elif float(pesoColuna1.text()) == 0:
                message = QCoreApplication.translate('Message to user','The weight must be different from zero')
                QMessageBox.warning(self, QCoreApplication.translate('Message to user','Missing information or invalid'), message)
                return False
                break
            else:
                listaRasters.append(float(pesoColuna1.text()))
        
        if round(sum(listaRasters),1) != 1:
            message = QCoreApplication.translate('Message to user','The sum of the weights must be 1')
            QMessageBox.warning(self, QCoreApplication.translate('Message to user','Missing information or invalid'), message)
            return False
        return True
        
    def validate_about(self):
        nRaster = self.contRow
        for raster in range(nRaster):  # adds the values
            aba_tabela_Notas = self.tabWidget.widget(raster)
            nClasse = aba_tabela_Notas.rowCount()
            for linhas in range(nClasse): 
                checkBox_cel = aba_tabela_Notas.cellWidget(linhas,2)
                itemValor = aba_tabela_Notas.item(linhas,1)
                if itemValor == None:
                    if checkBox_cel.isChecked() == False:
                        message = QCoreApplication.translate('Message to user','Fill the space for the grades or check "Not Calculate"')
                        QMessageBox.warning(self, QCoreApplication.translate('Message to user','Missing information or invalid'), message)
                        return False
                        break
                elif "," in itemValor.text():
                    message = QCoreApplication.translate('Message to user','The decimal separator must be "."')
                    QMessageBox.warning(self, QCoreApplication.translate('Message to user','Missing information or invalid'), message)
                    return False
                    break
                elif itemValor.text() == "":
                    if checkBox_cel.isChecked() == False:
                        message = QCoreApplication.translate('Message to user','Fill the space for the grades or check "Not Calculate"')
                        QMessageBox.warning(self, QCoreApplication.translate('Message to user','Missing information or invalid'), message)
                        return False
                        break
                elif any(letra.isalpha() for letra in itemValor.text()):
                    message = QCoreApplication.translate('Message to user','Don\'t use strings, only numbers')
                    QMessageBox.warning(self, QCoreApplication.translate('Message to user','Missing information or invalid'), message)
                    return False
                    break                            
                elif float(itemValor.text()) < 0 or float(itemValor.text()) > 10:
                    if float(itemValor.text()) != -9999:
                        message = QCoreApplication.translate('Message to user','The grades must be from 0 (zero) up to 10 (ten), or -9999')
                        QMessageBox.warning(self, QCoreApplication.translate('Message to user','Missing information or invalid'), message)
                        return False
                        break

        if self.lineEdit.text() == "":
            message = QCoreApplication.translate('Message to user','Select the output folder path and the output raster\'s name')
            QMessageBox.warning(self, QCoreApplication.translate('Message to user','Missing information or invalid'), message)
            return False

        return True
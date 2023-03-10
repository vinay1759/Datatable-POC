import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef } from 'ag-grid-community';
import 'ag-grid-enterprise';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'datatablePOC';
  // public columnDefs = [
  //   { field: 'vin'},
  //   { field: 'year'},
  //   { field: 'brand'},
  //   { field: 'color'}
  // ];
  // public rowData = [
  //   { "vin": "a165de", "year": 1992, "brand": "VW", "color": "Orange" },
  //   { "vin": "j6w54qgh", "year": 1980, "brand": "Audi", "color": "Black" },
  //   { "vin": "hrtwy34", "year": 2012, "brand": "Renault", "color": "Gray" },
  //   { "vin": "jejtyj", "year": 2011, "brand": "BMW", "color": "Blue" },
  //   { "vin": "g43gr", "year": 1995, "brand": "Mercedes", "color": "Orange" },
  // ]

  public rowData = [
    {
      id: '8eb8a9d0-8072-4ab9-84b0-59d92b4dec2f',
      documentRepositoryId: '088149ef-118f-49f7-bb4f-035ec50e1dec',
      accountId: 'e4cc216f-831a-4640-9e5b-c158c0de5d16',
      paidIndemnity: 17000,
      source1: 'chubb_format_1.pdf',
      policyNumber: '223856407',
      policyPeriod: '7/5/2016 - 7/5/2017',
      accidentDate: '06/09/2017',
      lob: 'Financial Services/Real estate',
      preRolledUpSet: null,
      internalLob: 'AL',
      claimStatus: 'Closed',
      reportDate: '06/10/2017',
      closeDate: '01/21/2019',
      dataAsOf: '05/19/2021',
      lossDescription: 'BARRICK/IV STRUCK OV',
      accidentStateCode: '',
      claimantName: 'Rohit\\Gupta',
      paidAlae: 6788,
      lossAndAlaeCaseReserve: 0,
      incurredIndemnity: 17000,
      incurredAlae: 6788,
      incurredLossAndAlae: 23788,
      accidentCountry: 'United States',
      lossCurrency: 'USD',
      entity: '3DLabs Inc. Ltd.',
      recovery: 0,
      caseReservesIndemnity: 0,
      caseReservesAlae: 0,
      lossAndAlaePaid: 23788,
      other1: 'ACDF',
      other2: 'ACDF',
      other3: 'ACDF',
      other4: 'ACDF',
      other5: 'ACDF',
      claimNumber: '1324421',
      isFromLastYear: false,
      isRolledUp: false,
      rolledUp_SNo: null,
      isNotRolledUp: null,
      isSeenByUser: null,
      comments: '',
    },
    {
      id: '6ebda29e-42fc-4e30-ae8c-8b696bf9b371',
      documentRepositoryId: '088149ef-118f-49f7-bb4f-035ec50e1dec',
      accountId: 'e4cc216f-831a-4640-9e5b-c158c0de5d16',
      paidIndemnity: 0,
      source1: 'chubb_format_1.pdf',
      policyNumber: '223856407',
      policyPeriod: '7/5/2016 - 7/5/2017',
      accidentDate: '06/10/2017',
      lob: 'GCE: General Liability Excess',
      preRolledUpSet: null,
      internalLob: 'AL',
      claimStatus: 'Closed',
      reportDate: '06/11/2017',
      closeDate: '10/19/2017',
      dataAsOf: '05/19/2021',
      lossDescription: 'BARRICK/IV STRUCK OV',
      accidentStateCode: 'MD',
      claimantName: 'Rohit Gupta',
      paidAlae: 194,
      lossAndAlaeCaseReserve: 0,
      incurredIndemnity: 0,
      incurredAlae: 194,
      incurredLossAndAlae: 194,
      accidentCountry: 'United States',
      lossCurrency: 'CAD',
      entity: '3DLabs Inc. Ltd.',
      recovery: 0,
      caseReservesIndemnity: 0,
      caseReservesAlae: 0,
      lossAndAlaePaid: 194,
      other1: 'Bcd',
      other2: 'Bcd',
      other3: 'Bcd',
      other4: 'Bcd',
      other5: 'Bcd',
      claimNumber: '12344A2',
      isFromLastYear: false,
      isRolledUp: false,
      rolledUp_SNo: null,
      isNotRolledUp: null,
      isSeenByUser: null,
      comments: '',
    },
    {
      id: 'a54b37ae-507f-414c-81ef-41ff662f5a53',
      documentRepositoryId: '088149ef-118f-49f7-bb4f-035ec50e1dec',
      accountId: 'e4cc216f-831a-4640-9e5b-c158c0de5d16',
      paidIndemnity: 17000,
      source1: 'chubb_format_1.pdf',
      policyNumber: '223856407',
      policyPeriod: '7/5/2016 - 7/5/2017',
      accidentDate: '06/10/2017',
      lob: 'Financial Services',
      preRolledUpSet: null,
      internalLob: 'AL',
      claimStatus: 'Closed',
      reportDate: '06/11/2017',
      closeDate: '01/21/2019',
      dataAsOf: '05/19/2021',
      lossDescription: 'BARRICK/IV STRUCK OV',
      accidentStateCode: '',
      claimantName: 'Rohit/Gupta',
      paidAlae: 6788,
      lossAndAlaeCaseReserve: 0,
      incurredIndemnity: 17000,
      incurredAlae: 6788,
      incurredLossAndAlae: 23788,
      accidentCountry: 'United States',
      lossCurrency: 'USD',
      entity: '3DLabs Inc. Ltd.',
      recovery: 0,
      caseReservesIndemnity: 0,
      caseReservesAlae: 0,
      lossAndAlaePaid: 23788,
      other1: 'ACDF',
      other2: 'ACDF',
      other3: 'ACDF',
      other4: 'ACDF',
      other5: 'ACDF',
      claimNumber: '13244A21',
      isFromLastYear: false,
      isRolledUp: false,
      rolledUp_SNo: null,
      isNotRolledUp: null,
      isSeenByUser: null,
      comments: '',
    },
    {
      id: '5b21c7a9-b289-4dee-958c-c5d68524b2f3',
      documentRepositoryId: '088149ef-118f-49f7-bb4f-035ec50e1dec',
      accountId: 'e4cc216f-831a-4640-9e5b-c158c0de5d16',
      paidIndemnity: 0,
      source1: 'chubb_format_1.pdf',
      policyNumber: '223856407',
      policyPeriod: '7/5/2016 - 7/5/2017',
      accidentDate: '06/11/2017',
      lob: 'GCE: General Liability Excess',
      preRolledUpSet: null,
      internalLob: 'AL',
      claimStatus: 'Closed',
      reportDate: '06/12/2017',
      closeDate: '10/19/2017',
      dataAsOf: '05/19/2021',
      lossDescription: 'BARRICK/IV STRUCK OV',
      accidentStateCode: 'MD',
      claimantName: 'Rohit Gupta',
      paidAlae: 194,
      lossAndAlaeCaseReserve: 0,
      incurredIndemnity: 0,
      incurredAlae: 194,
      incurredLossAndAlae: 194,
      accidentCountry: 'United States',
      lossCurrency: 'CAD',
      entity: '3DLabs Inc. Ltd.',
      recovery: 0,
      caseReservesIndemnity: 0,
      caseReservesAlae: 0,
      lossAndAlaePaid: 194,
      other1: 'Bcd',
      other2: 'Bcd',
      other3: 'Bcd',
      other4: 'Bcd',
      other5: 'Bcd',
      claimNumber: '1A44A2',
      isFromLastYear: false,
      isRolledUp: false,
      rolledUp_SNo: null,
      isNotRolledUp: null,
      isSeenByUser: null,
      comments: '',
    },
    {
      id: '71d1abbc-39fa-4a32-973c-327ecd7da471',
      documentRepositoryId: '088149ef-118f-49f7-bb4f-035ec50e1dec',
      accountId: 'e4cc216f-831a-4640-9e5b-c158c0de5d16',
      paidIndemnity: 17000,
      source1: 'chubb_format_1.pdf',
      policyNumber: '223856407',
      policyPeriod: '7/5/2016 - 7/5/2017',
      accidentDate: '06/11/2017',
      lob: 'Financial Services',
      preRolledUpSet: null,
      internalLob: 'AL',
      claimStatus: 'Closed',
      reportDate: '06/12/2017',
      closeDate: '01/21/2019',
      dataAsOf: '05/19/2021',
      lossDescription: 'BARRICK/IV STRUCK OV',
      accidentStateCode: '',
      claimantName: 'Rohit  Gupta',
      paidAlae: 6788,
      lossAndAlaeCaseReserve: 0,
      incurredIndemnity: 17000,
      incurredAlae: 6788,
      incurredLossAndAlae: 23788,
      accidentCountry: 'United States',
      lossCurrency: 'USD',
      entity: '3DLabs Inc. Ltd.',
      recovery: 0,
      caseReservesIndemnity: 0,
      caseReservesAlae: 0,
      lossAndAlaePaid: 23788,
      other1: 'ACDF',
      other2: 'ACDF',
      other3: 'ACDF',
      other4: 'ACDF',
      other5: 'ACDF',
      claimNumber: '132AA21',
      isFromLastYear: false,
      isRolledUp: false,
      rolledUp_SNo: null,
      isNotRolledUp: null,
      isSeenByUser: null,
      comments: '',
    },
    {
      id: '6438aea3-0603-4821-8889-8ec1915ee13e',
      documentRepositoryId: '088149ef-118f-49f7-bb4f-035ec50e1dec',
      accountId: 'e4cc216f-831a-4640-9e5b-c158c0de5d16',
      paidIndemnity: 0,
      source1: 'chubb_format_1.pdf',
      policyNumber: '223856407',
      policyPeriod: '7/5/2016 - 7/5/2017',
      accidentDate: '06/11/2017',
      lob: 'GCE: General Liability Excess',
      preRolledUpSet: null,
      internalLob: 'AL',
      claimStatus: 'Closed',
      reportDate: '06/12/2017',
      closeDate: '10/19/2017',
      dataAsOf: '05/19/2021',
      lossDescription: 'BARRICK/IV STRUCK OV',
      accidentStateCode: 'MD',
      claimantName: 'Rohit Gupta',
      paidAlae: 194,
      lossAndAlaeCaseReserve: 0,
      incurredIndemnity: 0,
      incurredAlae: 194,
      incurredLossAndAlae: 194,
      accidentCountry: 'United States',
      lossCurrency: 'CAD',
      entity: '3DLabs Inc. Ltd.',
      recovery: 0,
      caseReservesIndemnity: 0,
      caseReservesAlae: 0,
      lossAndAlaePaid: 194,
      other1: 'Bcd',
      other2: 'Bcd',
      other3: 'Bcd',
      other4: 'Bcd',
      other5: 'Bcd',
      claimNumber: '1A44A2',
      isFromLastYear: false,
      isRolledUp: false,
      rolledUp_SNo: null,
      isNotRolledUp: null,
      isSeenByUser: null,
      comments: '',
    },
    {
      id: 'd1676453-b92a-48d3-8442-1c275db94f57',
      documentRepositoryId: '088149ef-118f-49f7-bb4f-035ec50e1dec',
      accountId: 'e4cc216f-831a-4640-9e5b-c158c0de5d16',
      paidIndemnity: 17000,
      source1: 'chubb_format_1.pdf',
      policyNumber: '223856407',
      policyPeriod: '7/5/2016 - 7/5/2017',
      accidentDate: '06/11/2017',
      lob: 'Financial Services',
      preRolledUpSet: null,
      internalLob: 'AL',
      claimStatus: 'Closed',
      reportDate: '06/12/2017',
      closeDate: '01/21/2019',
      dataAsOf: '05/19/2021',
      lossDescription: 'BARRICK/IV STRUCK OV',
      accidentStateCode: '',
      claimantName: 'Rohit,Gupta',
      paidAlae: 6788,
      lossAndAlaeCaseReserve: 0,
      incurredIndemnity: 17000,
      incurredAlae: 6788,
      incurredLossAndAlae: 23788,
      accidentCountry: 'United States',
      lossCurrency: 'USD',
      entity: '3DLabs Inc. Ltd.',
      recovery: 0,
      caseReservesIndemnity: 0,
      caseReservesAlae: 0,
      lossAndAlaePaid: 23788,
      other1: 'ACDF',
      other2: 'ACDF',
      other3: 'ACDF',
      other4: 'ACDF',
      other5: 'ACDF',
      claimNumber: '132AA21',
      isFromLastYear: false,
      isRolledUp: false,
      rolledUp_SNo: null,
      isNotRolledUp: null,
      isSeenByUser: null,
      comments: '',
    },
    {
      id: '40977f3e-0161-4e57-85a0-b0289daa759c',
      documentRepositoryId: '088149ef-118f-49f7-bb4f-035ec50e1dec',
      accountId: 'e4cc216f-831a-4640-9e5b-c158c0de5d16',
      paidIndemnity: 8080,
      source1: 'chubb_format_1.pdf',
      policyNumber: '223856407',
      policyPeriod: '7/5/2016 - 7/5/2017',
      accidentDate: '06/07/2016',
      lob: 'ECA: Environmental Commercial Auto',
      preRolledUpSet: null,
      internalLob: 'AL',
      claimStatus: 'Open',
      reportDate: '09/01/2016',
      closeDate: '',
      dataAsOf: '05/19/2021',
      lossDescription: 'OIL FROM IV CAUSED LOSS CONTROL-OV asdvasdad',
      accidentStateCode: 'MD',
      claimantName: 'Ashutosh Sharma',
      paidAlae: 340,
      lossAndAlaeCaseReserve: 0,
      incurredIndemnity: 8080,
      incurredAlae: 340,
      incurredLossAndAlae: 8420,
      accidentCountry: 'Canada',
      lossCurrency: 'USD',
      entity: '3DLabs IncPtv. Ltd.',
      recovery: 0,
      caseReservesIndemnity: 0,
      caseReservesAlae: 0,
      lossAndAlaePaid: 8420,
      other1: 'ABC',
      other2: 'ABC',
      other3: 'ABC',
      other4: 'ABC',
      other5: 'ABC',
      claimNumber: 'DY16J0390426',
      isFromLastYear: false,
      isRolledUp: false,
      rolledUp_SNo: null,
      isNotRolledUp: null,
      isSeenByUser: null,
      comments: '',
    },
    {
      id: '69f8ce9e-f3e5-43b2-ad63-b1bbc56024b5',
      documentRepositoryId: '088149ef-118f-49f7-bb4f-035ec50e1dec',
      accountId: 'e4cc216f-831a-4640-9e5b-c158c0de5d16',
      paidIndemnity: 4040,
      source1: 'chubb_format_1.pdf',
      policyNumber: '223856407',
      policyPeriod: '7/5/2016 - 7/5/2017',
      accidentDate: '06/07/2016',
      lob: 'ECA: Environmental Commercial Auto',
      preRolledUpSet: null,
      internalLob: 'AL',
      claimStatus: 'Open',
      reportDate: '11/01/2016',
      closeDate: '',
      dataAsOf: '05/20/2021',
      lossDescription: 'OIL FROM IV CAUSED LOSS CONTROL-OV',
      accidentStateCode: 'MD',
      claimantName: 'AshutoshSharma',
      paidAlae: 170,
      lossAndAlaeCaseReserve: 0,
      incurredIndemnity: 4040,
      incurredAlae: 170,
      incurredLossAndAlae: 4210,
      accidentCountry: 'Canada',
      lossCurrency: 'USD',
      entity: '3D1Labs Inc. Ltd.',
      recovery: 0,
      caseReservesIndemnity: 0,
      caseReservesAlae: 0,
      lossAndAlaePaid: 4210,
      other1: 'Bcd',
      other2: 'Bcd',
      other3: 'Bcd',
      other4: 'Bcd',
      other5: 'Bcd',
      claimNumber: 'RO16J039042',
      isFromLastYear: false,
      isRolledUp: false,
      rolledUp_SNo: null,
      isNotRolledUp: null,
      isSeenByUser: null,
      comments: '',
    },
    {
      id: '0fad438d-e00a-4433-bcd6-1cba64e923cb',
      documentRepositoryId: '088149ef-118f-49f7-bb4f-035ec50e1dec',
      accountId: 'e4cc216f-831a-4640-9e5b-c158c0de5d16',
      paidIndemnity: 4040,
      source1: 'chubb_format_1.pdf',
      policyNumber: '223856407',
      policyPeriod: '7/5/2016 - 7/5/2017',
      accidentDate: '10/27/2016',
      lob: 'ECA: Environmental Commercial Auto',
      preRolledUpSet: null,
      internalLob: 'AL',
      claimStatus: 'Closed',
      reportDate: '10/28/2016',
      closeDate: '11/27/2016',
      dataAsOf: '05/20/2021',
      lossDescription: 'OIL FROM IV CAUSED LOSS CONTROL-OV',
      accidentStateCode: 'MD',
      claimantName: 'Standley Willie ',
      paidAlae: 170,
      lossAndAlaeCaseReserve: 0,
      incurredIndemnity: 4040,
      incurredAlae: 170,
      incurredLossAndAlae: 4210,
      accidentCountry: 'United States',
      lossCurrency: 'USD',
      entity: '3DLabs Inc. Ltd.',
      recovery: 0,
      caseReservesIndemnity: 0,
      caseReservesAlae: 0,
      lossAndAlaePaid: 4210,
      other1: 'ABC',
      other2: 'ABC',
      other3: 'ABC',
      other4: 'ABC',
      other5: 'ABC',
      claimNumber: 'CO16J03904',
      isFromLastYear: false,
      isRolledUp: false,
      rolledUp_SNo: null,
      isNotRolledUp: null,
      isSeenByUser: null,
      comments: '',
    },
    {
      id: 'c8a304a1-1be0-4e4c-9e4c-ab9a99fec30e',
      documentRepositoryId: '088149ef-118f-49f7-bb4f-035ec50e1dec',
      accountId: 'e4cc216f-831a-4640-9e5b-c158c0de5d16',
      paidIndemnity: 4040,
      source1: 'chubb_format_1.pdf',
      policyNumber: '223856407',
      policyPeriod: '7/5/2016 - 7/5/2017',
      accidentDate: '10/27/2016',
      lob: 'ECA: Environmental Commercial Auto',
      preRolledUpSet: null,
      internalLob: 'AL',
      claimStatus: 'Closed',
      reportDate: '11/01/2016',
      closeDate: '11/26/2016',
      dataAsOf: '05/10/2021',
      lossDescription: 'OIL FROM IV CAUSED LOSS CONTROL-OV',
      accidentStateCode: 'MD',
      claimantName: 'Willie Standley',
      paidAlae: 170,
      lossAndAlaeCaseReserve: 0,
      incurredIndemnity: 4040,
      incurredAlae: 170,
      incurredLossAndAlae: 4210,
      accidentCountry: 'United States',
      lossCurrency: 'USD',
      entity: '3DLabs Inc. Ltd.',
      recovery: 0,
      caseReservesIndemnity: 0,
      caseReservesAlae: 0,
      lossAndAlaePaid: 4210,
      other1: 'Bcd',
      other2: 'Bcd',
      other3: 'Bcd',
      other4: 'Bcd',
      other5: 'Bcd',
      claimNumber: 'CO16J00426',
      isFromLastYear: false,
      isRolledUp: false,
      rolledUp_SNo: null,
      isNotRolledUp: null,
      isSeenByUser: null,
      comments: '',
    },
    {
      id: 'e9534114-1315-431a-8a09-a6c14d0a63e0',
      documentRepositoryId: '088149ef-118f-49f7-bb4f-035ec50e1dec',
      accountId: 'e4cc216f-831a-4640-9e5b-c158c0de5d16',
      paidIndemnity: 4040,
      source1: 'chubb_format_1.pdf',
      policyNumber: '223856407',
      policyPeriod: '7/5/2016 - 7/5/2017',
      accidentDate: '10/27/2016',
      lob: 'ECA: Environmental Commercial Auto',
      preRolledUpSet: null,
      internalLob: 'AL',
      claimStatus: 'Closed',
      reportDate: '11/01/2016',
      closeDate: '11/28/2016',
      dataAsOf: '05/20/2021',
      lossDescription: 'OIL FROM IV CAUSED LOSS CONTROL-OV',
      accidentStateCode: '',
      claimantName: 'Willie Standley',
      paidAlae: 170,
      lossAndAlaeCaseReserve: 0,
      incurredIndemnity: 4040,
      incurredAlae: 170,
      incurredLossAndAlae: 4210,
      accidentCountry: 'United States',
      lossCurrency: 'USD',
      entity: '3DLabs Inc. Ltd.',
      recovery: 0,
      caseReservesIndemnity: 0,
      caseReservesAlae: 0,
      lossAndAlaePaid: 4210,
      other1: 'ACDF',
      other2: 'ACDF',
      other3: 'ACDF',
      other4: 'ACDF',
      other5: 'ACDF',
      claimNumber: 'RO16J03906',
      isFromLastYear: false,
      isRolledUp: false,
      rolledUp_SNo: null,
      isNotRolledUp: null,
      isSeenByUser: null,
      comments: '',
    },
    {
      id: '040a0f01-1a04-4946-92d3-b3699908952e',
      documentRepositoryId: '088149ef-118f-49f7-bb4f-035ec50e1dec',
      accountId: 'e4cc216f-831a-4640-9e5b-c158c0de5d16',
      paidIndemnity: 0,
      source1: 'chubb_format_1.pdf',
      policyNumber: '223856407',
      policyPeriod: '7/5/2016 - 7/5/2017',
      accidentDate: '06/07/2017',
      lob: 'ECA: Environmental Commercial Auto',
      preRolledUpSet: null,
      internalLob: 'AL',
      claimStatus: 'Open',
      reportDate: '10/01/2017',
      closeDate: '',
      dataAsOf: '05/19/2021',
      lossDescription: 'OIL FROM IV CAUSED LOSS CONTROL-OV',
      accidentStateCode: '',
      claimantName: 'Ashutosh ',
      paidAlae: 0,
      lossAndAlaeCaseReserve: 0,
      incurredIndemnity: 0,
      incurredAlae: 0,
      incurredLossAndAlae: 0,
      accidentCountry: 'United States',
      lossCurrency: 'USD',
      entity: '3DLabs Inc. Ltd.',
      recovery: 0,
      caseReservesIndemnity: 0,
      caseReservesAlae: 0,
      lossAndAlaePaid: 0,
      other1: 'ABC',
      other2: 'ABC',
      other3: 'ABC',
      other4: 'ABC',
      other5: 'ABC',
      claimNumber: 'KY17K0404847',
      isFromLastYear: false,
      isRolledUp: false,
      rolledUp_SNo: null,
      isNotRolledUp: null,
      isSeenByUser: null,
      comments: '',
    },
    {
      id: '898d6905-879f-4e29-8e20-740d517fc328',
      documentRepositoryId: '088149ef-118f-49f7-bb4f-035ec50e1dec',
      accountId: 'e4cc216f-831a-4640-9e5b-c158c0de5d16',
      paidIndemnity: 0,
      source1: 'chubb_format_1.pdf',
      policyNumber: '223856407',
      policyPeriod: '7/5/2016 - 7/5/2017',
      accidentDate: '06/07/2017',
      lob: 'GCE: General Liability Excess',
      preRolledUpSet: null,
      internalLob: 'AL',
      claimStatus: 'Closed',
      reportDate: '06/08/2017',
      closeDate: '10/19/2017',
      dataAsOf: '05/19/2021',
      lossDescription: 'BARRICK/IV STRUCK OV',
      accidentStateCode: 'MD',
      claimantName: 'Rohit Gupta',
      paidAlae: 194,
      lossAndAlaeCaseReserve: 0,
      incurredIndemnity: 0,
      incurredAlae: 194,
      incurredLossAndAlae: 194,
      accidentCountry: 'United States',
      lossCurrency: 'USD',
      entity: '3DLabs Inc. Ltd.',
      recovery: 0,
      caseReservesIndemnity: 0,
      caseReservesAlae: 0,
      lossAndAlaePaid: 194,
      other1: 'Bcd',
      other2: 'Bcd',
      other3: 'Bcd',
      other4: 'Bcd',
      other5: 'Bcd',
      claimNumber: 'KY17K0404847',
      isFromLastYear: false,
      isRolledUp: false,
      rolledUp_SNo: null,
      isNotRolledUp: null,
      isSeenByUser: null,
      comments: '',
    },
    {
      id: '88a3186f-272d-480e-b17f-385887b5dd6c',
      documentRepositoryId: '088149ef-118f-49f7-bb4f-035ec50e1dec',
      accountId: 'e4cc216f-831a-4640-9e5b-c158c0de5d16',
      paidIndemnity: 17000,
      source1: 'chubb_format_1.pdf',
      policyNumber: '223856407',
      policyPeriod: '7/5/2016 - 7/5/2017',
      accidentDate: '06/07/2017',
      lob: 'Financial Services/Real estate',
      preRolledUpSet: null,
      internalLob: 'AL',
      claimStatus: 'Closed',
      reportDate: '08/08/2017',
      closeDate: '01/21/2019',
      dataAsOf: '05/18/2019',
      lossDescription: 'BARRICK/IV STRUCK OV',
      accidentStateCode: 'MD',
      claimantName: 'Suraj',
      paidAlae: 6788,
      lossAndAlaeCaseReserve: 0,
      incurredIndemnity: 17000,
      incurredAlae: 6788,
      incurredLossAndAlae: 23788,
      accidentCountry: 'Canada',
      lossCurrency: 'USD',
      entity: '3DLabs Inc. Ltd.',
      recovery: 0,
      caseReservesIndemnity: 0,
      caseReservesAlae: 0,
      lossAndAlaePaid: 23788,
      other1: 'ABC',
      other2: 'ABC',
      other3: 'ABC',
      other4: 'ABC',
      other5: 'ABC',
      claimNumber: 'KY17K0404847',
      isFromLastYear: false,
      isRolledUp: false,
      rolledUp_SNo: null,
      isNotRolledUp: null,
      isSeenByUser: null,
      comments: '',
    },
    {
      id: '8c19cada-679e-4ca3-9d5e-52e7f8ab8b29',
      documentRepositoryId: '088149ef-118f-49f7-bb4f-035ec50e1dec',
      accountId: 'e4cc216f-831a-4640-9e5b-c158c0de5d16',
      paidIndemnity: 0,
      source1: 'chubb_format_1.pdf',
      policyNumber: '223856407',
      policyPeriod: '7/5/2016 - 7/5/2017',
      accidentDate: '06/07/2017',
      lob: 'GCE: General Liability Excess',
      preRolledUpSet: null,
      internalLob: 'AL',
      claimStatus: 'Closed',
      reportDate: '08/08/2017',
      closeDate: '10/19/2017',
      dataAsOf: '05/19/2021',
      lossDescription: 'BARRICK/IV STRUCK OV',
      accidentStateCode: 'MD',
      claimantName: 'Ashutosh',
      paidAlae: 194,
      lossAndAlaeCaseReserve: 0,
      incurredIndemnity: 0,
      incurredAlae: 194,
      incurredLossAndAlae: 194,
      accidentCountry: 'United States',
      lossCurrency: 'CAD',
      entity: '3DLabs Inc. Ltd.',
      recovery: 0,
      caseReservesIndemnity: 0,
      caseReservesAlae: 0,
      lossAndAlaePaid: 194,
      other1: 'Bcd',
      other2: 'Bcd',
      other3: 'Bcd',
      other4: 'Bcd',
      other5: 'Bcd',
      claimNumber: 'hahaha',
      isFromLastYear: false,
      isRolledUp: false,
      rolledUp_SNo: null,
      isNotRolledUp: null,
      isSeenByUser: null,
      comments: '',
    },
    {
      id: '281f52bf-11e4-4f18-8928-3d998dc6664e',
      documentRepositoryId: '088149ef-118f-49f7-bb4f-035ec50e1dec',
      accountId: 'e4cc216f-831a-4640-9e5b-c158c0de5d16',
      paidIndemnity: 17000,
      source1: 'chubb_format_1.pdf',
      policyNumber: '223856407',
      policyPeriod: '7/5/2016 - 7/5/2017',
      accidentDate: '06/07/2017',
      lob: 'Financial Services/Real estate',
      preRolledUpSet: null,
      internalLob: 'AL',
      claimStatus: 'Closed',
      reportDate: '08/08/2017',
      closeDate: '01/21/2019',
      dataAsOf: '05/19/2021',
      lossDescription: 'BARRICK/IV STRUCK OV',
      accidentStateCode: '',
      claimantName: 'Rohit/Gupta',
      paidAlae: 6788,
      lossAndAlaeCaseReserve: 0,
      incurredIndemnity: 17000,
      incurredAlae: 6788,
      incurredLossAndAlae: 23788,
      accidentCountry: 'United States',
      lossCurrency: 'USD',
      entity: '3DLabs Inc. Ltd.',
      recovery: 0,
      caseReservesIndemnity: 0,
      caseReservesAlae: 0,
      lossAndAlaePaid: 23788,
      other1: 'ACDF',
      other2: 'ACDF',
      other3: 'ACDF',
      other4: 'ACDF',
      other5: 'ACDF',
      claimNumber: '132442',
      isFromLastYear: false,
      isRolledUp: false,
      rolledUp_SNo: null,
      isNotRolledUp: null,
      isSeenByUser: null,
      comments: '',
    },
    {
      id: 'd103e409-b686-45b6-bd8f-90f4d0e6d36f',
      documentRepositoryId: '088149ef-118f-49f7-bb4f-035ec50e1dec',
      accountId: 'e4cc216f-831a-4640-9e5b-c158c0de5d16',
      paidIndemnity: 0,
      source1: 'chubb_format_1.pdf',
      policyNumber: '223856407',
      policyPeriod: '7/5/2016 - 7/5/2017',
      accidentDate: '06/08/2017',
      lob: 'GCE: General Liability Excess',
      preRolledUpSet: null,
      internalLob: 'AL',
      claimStatus: 'Closed',
      reportDate: '06/08/2017',
      closeDate: '10/19/2017',
      dataAsOf: '05/19/2021',
      lossDescription: 'BARRICK/IV STRUCK OV',
      accidentStateCode: 'MD',
      claimantName: 'GuptRohit',
      paidAlae: 194,
      lossAndAlaeCaseReserve: 0,
      incurredIndemnity: 0,
      incurredAlae: 194,
      incurredLossAndAlae: 194,
      accidentCountry: 'United States',
      lossCurrency: 'CAD',
      entity: '3DLabs Inc. Ltd.',
      recovery: 0,
      caseReservesIndemnity: 0,
      caseReservesAlae: 0,
      lossAndAlaePaid: 194,
      other1: 'Bcd',
      other2: 'Bcd',
      other3: 'Bcd',
      other4: 'Bcd',
      other5: 'Bcd',
      claimNumber: '123445',
      isFromLastYear: false,
      isRolledUp: false,
      rolledUp_SNo: null,
      isNotRolledUp: null,
      isSeenByUser: null,
      comments: '',
    },
    {
      id: '46a5b6a2-f954-4018-8c4b-599171ad6fba',
      documentRepositoryId: '088149ef-118f-49f7-bb4f-035ec50e1dec',
      accountId: 'e4cc216f-831a-4640-9e5b-c158c0de5d16',
      paidIndemnity: 17000,
      source1: 'chubb_format_1.pdf',
      policyNumber: '223856407',
      policyPeriod: '7/5/2016 - 7/5/2017',
      accidentDate: '06/08/2017',
      lob: 'Financial Services/Real estate',
      preRolledUpSet: null,
      internalLob: 'AL',
      claimStatus: 'Closed',
      reportDate: '06/08/2017',
      closeDate: '01/21/2019',
      dataAsOf: '05/19/2021',
      lossDescription: 'BARRICK/IV STRUCK OV',
      accidentStateCode: '',
      claimantName: 'Rohit\\Gupta',
      paidAlae: 6788,
      lossAndAlaeCaseReserve: 0,
      incurredIndemnity: 17000,
      incurredAlae: 6788,
      incurredLossAndAlae: 23788,
      accidentCountry: 'United States',
      lossCurrency: 'USD',
      entity: '3DLabs Inc. Ltd.',
      recovery: 0,
      caseReservesIndemnity: 0,
      caseReservesAlae: 0,
      lossAndAlaePaid: 23788,
      other1: 'ACDF',
      other2: 'ACDF',
      other3: 'ACDF',
      other4: 'ACDF',
      other5: 'ACDF',
      claimNumber: '132442',
      isFromLastYear: false,
      isRolledUp: false,
      rolledUp_SNo: null,
      isNotRolledUp: null,
      isSeenByUser: null,
      comments: '',
    },
    {
      id: '5d8dfade-7582-4104-8451-fd7456797da8',
      documentRepositoryId: '088149ef-118f-49f7-bb4f-035ec50e1dec',
      accountId: 'e4cc216f-831a-4640-9e5b-c158c0de5d16',
      paidIndemnity: 0,
      source1: 'chubb_format_1.pdf',
      policyNumber: '223856407',
      policyPeriod: '7/5/2016 - 7/5/2017',
      accidentDate: '06/09/2017',
      lob: 'GCE: General Liability Excess',
      preRolledUpSet: null,
      internalLob: 'AL',
      claimStatus: 'Closed',
      reportDate: '06/10/2017',
      closeDate: '10/19/2017',
      dataAsOf: '05/19/2021',
      lossDescription: 'BARRICK/IV STRUCK OV',
      accidentStateCode: 'MD',
      claimantName: 'Rohit Gupta',
      paidAlae: 194,
      lossAndAlaeCaseReserve: 0,
      incurredIndemnity: 0,
      incurredAlae: 194,
      incurredLossAndAlae: 194,
      accidentCountry: 'United States',
      lossCurrency: 'CAD',
      entity: '3DLabs Inc. Ltd.',
      recovery: 0,
      caseReservesIndemnity: 0,
      caseReservesAlae: 0,
      lossAndAlaePaid: 194,
      other1: 'Bcd',
      other2: 'Bcd',
      other3: 'Bcd',
      other4: 'Bcd',
      other5: 'Bcd',
      claimNumber: '1234452',
      isFromLastYear: false,
      isRolledUp: false,
      rolledUp_SNo: null,
      isNotRolledUp: null,
      isSeenByUser: null,
      comments: '',
    },
  ];

  public columnDefs = [
    { field: 'claimNumber', headerName: 'Claim Number', filter:'',filterParams:{}},
    { field: 'accidentDate', headerName: 'Accident Date' , filter:'',filterParams:{}},
    { field: 'claimStatus', headerName: 'Claim Status' , filter:'',filterParams:{}},
    { field: 'reportDate', headerName: 'Report Date' , filter:'',filterParams:{}},
    { field: 'closeDate', headerName: 'Close Date' , filter:'',filterParams:{}},
    { field: 'lob', headerName: 'LOB' , filter:'',filterParams:{}},
    { field: 'dataAsOf', headerName: 'Data As Of' , filter:'',filterParams:{}},
    {
      field: 'lossDescription',
      headerName: 'Loss Description'
    , filter:'',filterParams:{}},
    {
      field: 'accidentStateCode',
      headerName: 'Accident State Code'
    , filter:'',filterParams:{}},
    { field: 'claimantName', headerName: 'Claimant Name' , filter:'',filterParams:{}},
    { field: 'paidIndemnity', headerName: 'Paid Indemnity' , filter:'',filterParams:{}},
    { field: 'paidAlae', headerName: 'Paid ALAE' , filter:'',filterParams:{}},
    {
      field: 'caseReservesIndemnity',
      headerName: 'Case Reserves Indemnity'
    , filter:'',filterParams:{}},
    {
      field: 'caseReservesAlae',
      headerName: 'Case Reserves ALAE'
    , filter:'',filterParams:{}},
    {
      field: 'lossAndAlaePaid',
      headerName: 'Loss and ALAE Paid'
    , filter:'',filterParams:{}},
    {
      field: 'lossAndAlaeCaseReserve',
      headerName: 'Loss and ALAE Case Reserve'
    , filter:'',filterParams:{}},
    {
      field: 'incurredIndemnity',
      headerName: 'Incurred Indemnity'
    , filter:'',filterParams:{}},
    { field: 'incurredAlae', headerName: 'Incurred ALAE' , filter:'',filterParams:{}},
    {
      field: 'incurredLossAndAlae',
      headerName: 'Incurred Loss and ALAE'
    , filter:'',filterParams:{}},
    {
      field: 'accidentCountry',
      headerName: 'Accident Country'
    , filter:'',filterParams:{}},
    { field: 'lossCurrency', headerName: 'Loss Currency' , filter:'',filterParams:{}},
    { field: 'entity', headerName: 'Entity' , filter:'',filterParams:{}},
    { field: 'recovery', headerName: 'Recovery' , filter:'',filterParams:{}},
    { field: 'other1', headerName: 'Other1' , filter:'',filterParams:{}},
    { field: 'other2', headerName: 'Other2' , filter:'',filterParams:{}},
    { field: 'other3', headerName: 'Other3' , filter:'',filterParams:{}},
    { field: 'other4', headerName: 'Other4' , filter:'',filterParams:{}},
    { field: 'other5', headerName: 'Other5' , filter:'',filterParams:{}},
    { field: 'source1', headerName: 'Source1' , filter:'',filterParams:{}},
    { field: 'policyNumber', headerName: 'Policy Number' , filter:'',filterParams:{}},
    { field: 'policyPeriod', headerName: 'Policy Period' , filter:'',filterParams:{}},
  ];

  // public defaultColumns: any[] = [
  //   { width: 140, key", value: "Claim Number", checked: false },
  //   { width: 140,  value: "Accident Date", checked: false },
  //   { width: 140,  value: "Claim Status", checked: false },
  //   { width: 130,  value: "Report Date", checked: false },
  //   { width: 130,  value: "Close Date", checked: false },
  //   { width: 140,  value: "LOB", checked: false },
  //   { width: 130,  value: "Date as Of", checked: false },
  //   { width: 240,  value: "Loss Description", checked: false },
  //   { width: 200,  value: "Accident State Code", checked: false },
  //   { width: 140,  value: "Claimant Name", checked: false },
  //   { width: 140,  value: "Paid Indemnity", checked: false },
  //   { width: 120,  value: "Paid Alae", checked: false },
  //   { width: 200,  value: "Case Reserves Indemnity", checked: false },
  //   { width: 160,  value: "Case Reserves Alae", checked: false },
  //   { width: 160,  value: "Loss and Alae Paid", checked: false },
  //   { width: 230,  value: "Loss and Alae Case Reserve", checked: false },
  //   { width: 170,  value: "Incurred Indemnity", checked: false },
  //   { width: 140,  value: "Incurred Alae", checked: false },
  //   { width: 190,  value: "Incurred Loss and Alae", checked: false },
  //   { width: 150,  value: "Accident Country", checked: false },
  //   { width: 140,  value: "Loss Currency", checked: false },
  //   { width: 130,  value: "Entity", checked: false },
  //   { width: 140,  value: "Recovery", checked: false },
  //   { width: 140,  value: "Other1", checked: false },
  //   { width: 140,  value: "Other2", checked: false },
  //   { width: 140,  value: "Other3", checked: false },
  //   { width: 140,  value: "Other4", checked: false },
  //   { width: 140,  value: "Other5", checked: false },
  //   { width: 140,  value: "Source1", checked: false },
  //   { width: 140,  value: "Policy Number", checked: false },
  //   { width: 140,  value: "Policy Period", checked: false }
  // ];

  // DefaultColDef sets props common to all Columns

  ngOnInit(): void {
    this.fillFilterParams();
    this.convertStringToDate(this.rowData);
  }

  public defaultColDef: ColDef = {
    sortable: true,
    resizable: true,
    floatingFilter: true,
  };

  public fillFilterParams() {
    this.columnDefs.forEach((column) => {
      if (column.field.includes('Date')) {
        column.filter = 'agDateColumnFilter';
      } else {
        column.filter = 'agSetColumnFilter';
      }
      column.filterParams = {
        values: this.findUniqueValues(this.rowData, column.field),
      };
    });
  }

  findUniqueValues(rowData: any[], columnName: string): any[] {
    const uniqueValues: any[] = [];
    for (const row of rowData) {
      if (!uniqueValues.includes(row[columnName])) {
        uniqueValues.push(row[columnName]);
      }
    }
    return uniqueValues;
  }

  public convertStringToDate(rowData: any[]) {
    this.columnDefs.forEach((column) => {
      if (column.field.includes('date')) { 
        for (var row of rowData) {
          const datePipe = new DatePipe('en-US');
          datePipe.transform(row[column.field], 'MM/dd/yyyy');
        }
      }
    })
    console.log(this.rowData);
  }
  // For accessing the Grid's API
  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;

  // Example of consuming Grid Event
  onCellClicked(e: CellClickedEvent): void {
    console.log('cellClicked', e);
  }

  // Example using Grid's API
  clearSelection(): void {
    this.agGrid.api.deselectAll();
  }
}

import React from 'react';
import Image from 'react-bootstrap/Image';
import { HouseFill, ArrowRight, EmojiAngryFill, EmojiSmileFill, EmojiHeartEyesFill, EmojiExpressionlessFill, EmojiFrownFill, Speedometer, ArrowUp, CheckCircleFill } from 'react-bootstrap-icons';

    class Conveyancer extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                // initialize state here
                showPopup: false,
                popupData: null,
            };
        }

        componentDidMount() {
            // code to run after component mounts
        }

        componentDidUpdate(prevProps, prevState) {
            // code to run after component updates
        }

        componentWillUnmount() {
            // code to run before component unmounts
        }

        handleRowClick = (row) => {
            this.setState({
                showPopup: true,
                popupData: row,
            });
        };

        handlePopupClose = () => {
            this.setState({
                showPopup: false,
                popupData: null,
            });
        };

        render() {
            const headers = [
                'Lender Reference',
                'Account Number',
                'Customer',
                'Property Address',
                'Law Firm',
                'Loan Type',
                'Purchase Price',
                'Loan Amount',
                'Completion Date',
                'Title Number',
            ];

            const headers2 = [
                'ID Verified',
                'CON29',
                'Floor Report',
                'Title Confirmed',
                'Drainage and Water',
                'Environmental',
                'Tenure',
                'Local and Land Charges',
                'Radon Gas',
            ];

            const data2 = [
                {
                    idVerified: true,
                    con29: true,
                    floorReport: true,
                    titleConfirmed: true,
                    drainageAndWater: true,
                    environmental: true,
                    tenure: 'Freehold',
                    localAndLandCharges: true,
                    radonGas: false,
                },
                {
                    idVerified: true,
                    con29: true,
                    floorReport: false,
                    titleConfirmed: true,
                    drainageAndWater: true,
                    environmental: true,
                    tenure: 'Leasehold',
                    localAndLandCharges: true,
                    radonGas: true,
                },
                {
                    idVerified: true,
                    con29: true,
                    floorReport: true,
                    titleConfirmed: false,
                    drainageAndWater: true,
                    environmental: false,
                    tenure: 'Freehold',
                    localAndLandCharges: true,
                    radonGas: false,
                },
                {
                    idVerified: false,
                    con29: true,
                    floorReport: true,
                    titleConfirmed: true,
                    drainageAndWater: true,
                    environmental: true,
                    tenure: 'Freehold',
                    localAndLandCharges: false,
                    radonGas: false,
                },
            ];
                
            const data = [
              
                {
                    lenderReference: 'DEF456',
                    accountNumber: '0987654321',
                    customer: 'Jane Doe',
                    propertyAddress: '456 Oak St',
                    lawFirm: 'Doe & Co',
                    loanType: 'Variable',
                    purchasePrice: '£750,000',
                    loanAmount: '£600,000',
                    completionDate: '2022-02-01',
                    titleNumber: 'CD789012',
                    idVerified: true,
                    con29: true,
                    floorReport: true,
                    titleConfirmed: true,
                    drainageAndWater: true,
                    environmental: true,
                    tenure: 'Freehold',
                    localAndLandCharges: true,
                    radonGas: false,
                },
                {
                    lenderReference: 'GHI789',
                    accountNumber: '1357908642',
                    customer: 'Bob Johnson',
                    propertyAddress: '789 Elm St',
                    lawFirm: 'Johnson & Sons',
                    loanType: 'Tracker',
                    purchasePrice: '£1,000,000',
                    loanAmount: '£800,000',
                    completionDate: '2022-03-01',
                    titleNumber: 'EF345678',
                },
                {
                    lenderReference: 'JKL012',
                    accountNumber: '2468013579',
                    customer: 'John Smith',
                    propertyAddress: '123 Main St',
                    lawFirm: 'Smith & Co',
                    loanType: 'Fixed',
                    purchasePrice: '£500,000',
                    loanAmount: '£400,000',
                    completionDate: '2022-04-01',
                    titleNumber: 'GH123456',
                },
                {
                    lenderReference: 'MNO345',
                    accountNumber: '3692581470',
                    customer: 'Alice Johnson',
                    propertyAddress: '789 Oak St',
                    lawFirm: 'Johnson & Co',
                    loanType: 'Variable',
                    purchasePrice: '£900,000',
                    loanAmount: '£720,000',
                    completionDate: '2022-05-01',
                    titleNumber: 'IJ234567',
                }
            ];

            return (
                
                <div className='conveyancer'>
                    <h2>Conveyancing Details</h2>
                    
                    <table>
                        <thead>
                            <tr>
                                {headers.map((header) => (
                                    <th key={header}>{header}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((row) => (
                                <tr key={row.lenderReference} onClick={() => this.handleRowClick(row)}>
                                    <td>{row.lenderReference}</td>
                                    <td>{row.accountNumber}</td>
                                    <td>{row.customer}</td>
                                    <td>{row.propertyAddress}</td>
                                    <td>{row.lawFirm}</td>
                                    <td>{row.loanType}</td>
                                    <td>{row.purchasePrice}</td>
                                    <td>{row.loanAmount}</td>
                                    <td>{row.completionDate}</td>
                                    <td>{row.titleNumber}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {this.state.showPopup && (
                        <div className='popup'>
                            <div className='popup-content'>
                                
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>ID Verified:</td>
                                            <td><CheckCircleFill/> </td>
                                            
                                        </tr>
                                        <tr>
                                            <td>Title Confirmed:</td>
                                            <td><CheckCircleFill/> </td>
                                        </tr>
                                        <tr>
                                            <td>Tenure:</td>
                                            <td><CheckCircleFill/> </td>
                                        </tr>
                                        <tr>
                                            <td>Con29:</td>
                                            <td><CheckCircleFill/> </td>
                                        </tr>
                                        <tr>
                                            <td>Drainage & Water:</td>
                                            <td><CheckCircleFill/> </td>
                                        </tr>
                                        <tr>
                                            <td>Local Land Charges (LLC1):</td>
                                            <td><CheckCircleFill/> </td>
                                        </tr>
                                        <tr>
                                            <td>Floor Report:</td>
                                            <td><CheckCircleFill/> </td>
                                        </tr>
                                        <tr>
                                            <td>Environmental:</td>
                                            <td><CheckCircleFill/> </td>
                                        </tr>
                                   
                                       
                                    </tbody>
                                </table>
                                <button onClick={this.handlePopupClose}>Close</button>
                            </div>
                        </div>
                    )}
                </div>
            );
        }



        
    }

   


export default Conveyancer;
                       




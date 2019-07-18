import React from 'react';
import CategoryButtons from './CategoryButtons/CategoryButtons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from '../../Logo/Logo';
import WithouthRootDiv from '../../../hoc/WithoutRootDiv/WithoutRootDiv';
import './ShopSideBarNew.css';

const shopSideBar = (props) => {
    console.log('in shop side bar');

   
    const attachedClasses = props.shownCategoryMenu ? ['side-bar-wrapper show-categories'] : ['side-bar-wrapper'];
    return (
        <div className='side-bar-main'>
            
        <div className={attachedClasses}>
            <div className='l-only'> 
            <div className='head-decoration'>

                

            <svg xmlns="http://www.w3.org/2000/svg" fill='#4d2600' version="1.1" x="0px" y="0px" viewBox="0 0 2658 281.386" enable-background="new 0 0 2658 281.386"> <g> <g> <path d="M1412.709,200.808c61.507,14.105,126.765,20.981,167.007-27.373c1.074,1.273,28.542,30.853,32.277,34.485 c30.587-40.423,92.939-47.71,143.84-47.71c0.148,1.028,3.067,14.552,3.195,15.145c46.867-15.712,105.042-19.062,153.494-19.062 c4.501,4.725,9.985,9.83,12.87,13.226c0,0,462.983-21.01,683.608-30.568c-0.001,0-683.607-30.645-683.608-30.645 c-3.547,4.174-7.395,7.516-12.87,13.225c-48.456,0-105.675-3.156-153.494-19.05c-0.52,2.388-2.917,13.216-3.195,15.145 c-49.191,0-112.445-6.219-143.84-47.71c-2.568,2.481-30.34,32.257-32.277,34.484c-39.584-47.564-109.623-42.892-168.927-26.74 c-43.92-56.438-121.664-61.489-171.911-1.919c-58.067-14.016-122.569-17.309-160.251,28.659 c-0.881-1.014-31.821-34.096-32.209-34.484c-37.583,41.699-87.801,47.71-143.829,47.71c-0.827-2.464-3.055-14.141-3.274-15.145 c-52.561,15.991-100.682,19.05-153.781,19.05c-6.333-6.333-8.208-8.077-12.583-13.225c0,0-683.949,30.645-683.951,30.645 c154.752,6.594,683.951,30.568,683.951,30.568c3.351-3.945,5.419-6.013,12.583-13.226c54.018,0,102.11,3.206,153.781,19.062 c0.216-1,2.297-12.234,3.274-15.145c56.516,0,106.272,6.04,143.829,47.71c0.771-0.776,31.229-33.323,32.209-34.485 c36.746,44.7,101.305,43.204,157.976,29.359C1283.847,263.764,1367.387,262.865,1412.709,200.808"/> </g> </g> </svg>

            </div>
                <div className='md-only'><span>Categories:</span></div>
            </div>
            <div className='hide-on-l'>
                <div className='md-only' onClick={() => props.toggleCategoryMenu()}><span>Shop by category<FontAwesomeIcon icon="chevron-down"/></span></div>
            </div>


            

            <div className='side-bar-container'>
                {/* <div className='background-container'>
<svg enableBackground="new 0 0 2612.198 457.271" version="1.1" viewBox="0 0 2612.198 457.271" xmlns="http://www.w3.org/2000/svg" fill='#331a00'>
 <path d="m1306.1 267.13c-177.02-0.091-355.6-0.191-535.44-0.304 68.262-43.193 6.463-148.53-17.272-127.23-2.023 8.568 29.8 61.444-50.04 103.21-57.261 29.617-112.08-8.77-155.64-56.225-95.767-110.34-255.78-43.715-260.15-43.264-2.132-2.275-3.696-5.024-5.427-7.724 20.339-7.307 50.087-28.498 123.35-27.082 87.303-2.333 150.62 68.108 169.27 84.181 129.16 108.34 179.47-5.947 164-57.267-8.528-31.074-52.471-77.29-70.938-53.712-6.658 10.876-0.141 25.448 9.999 31.725 9.715 6.966 22.485 3.009 33.051 6.991 31.078 26.642 11.567 99.396-53.499 72.526 14.785-50.373-22.243-69.376-63.971-42.457-0.74-42.256-26.721-65.033-80.32-37.72-1.453-32.106-27.38-50.032-70.962-21.016-1.018-6.35-1.161-13.671-6.207-18.433-7.865-8.057-20.139-10.378-30.945-8.341-9.286 1.658-16.135 8.766-22.864 14.88-5.638-12.889-21.206-15.567-33.55-11.918-47.419 13.397-74.309 43.382-78.684 46.913-3.198 0.592-5-3.672-7.462-5.449-107.68-131.65-226.89-49.137-235.8 22.794-4.895 42.717 26.157 89.296 65.984 90.342 49.962 3.44 89.455-44.656 66.506-80.747-11.656-20.494-39.733-29.498-60.868-18.386-21.117 7.638-36.94 54.998 21.371 62.218-15.223 23.152-61.878 9.316-66.057-35.563-4.735-62.07 120.66-132.09 177.23 38.216 6.142 20.432-11.233 12.879-31.205 45.893-81.253 127.74 90.592 258.9 107.09 131.05 387.08 0.996 247.66-3.119 297.06 9.074 6.729-9.596 12.937-19.807 14.239-31.725 7.966 6.249 32.295 56.437 76.127 45.658 2.867-8.103 4.429-17.415 10.519-23.741 1.012-0.234 229.5-0.417 601.49-0.55 371.99 0.133 600.48 0.316 601.49 0.55 6.09 6.326 7.654 15.638 10.519 23.741 43.832 10.781 68.161-39.409 76.127-45.658 1.302 11.918 7.511 22.128 14.239 31.725 49.406-12.194-90.017-8.079 297.06-9.074 16.502 127.85 188.35-3.309 107.09-131.05-19.972-33.016-37.345-25.462-31.205-45.893 56.572-170.31 181.96-100.29 177.23-38.217-4.179 44.88-50.834 58.716-66.057 35.563 58.311-7.22 42.488-54.581 21.371-62.218-21.135-11.112-49.212-2.11-60.868 18.386-22.948 36.092 16.547 84.187 66.506 80.747 39.828-1.046 70.879-47.624 65.985-90.342-8.905-71.929-128.12-154.45-235.79-22.794-2.465 1.777-4.264 6.042-7.462 5.449-4.377-3.53-31.265-33.516-78.686-46.913-12.345-3.65-27.91-0.971-33.55 11.918-6.729-6.114-13.578-13.222-22.864-14.88-10.805-2.037-23.078 0.284-30.945 8.341-5.046 4.762-5.189 12.083-6.207 18.433-43.58-29.016-69.509-11.092-70.962 21.016-53.599-27.313-79.581-4.536-80.32 37.72-41.73-26.919-78.757-7.914-63.971 42.457-65.063 26.87-84.576-45.881-53.498-72.526 10.568-3.98 23.338-0.024 33.051-6.991 10.14-6.279 16.657-20.851 9.999-31.725-18.467-23.577-62.41 22.638-70.938 53.712-15.464 51.318 34.844 165.6 164 57.267 18.646-16.073 81.961-86.515 169.26-84.181 73.261-1.417 103.01 19.775 123.35 27.082-1.729 2.7-3.295 5.449-5.427 7.724-4.377-0.451-164.38-67.077-260.15 43.264-43.558 47.455-98.38 85.842-155.64 56.225-79.841-41.764-48.017-94.64-50.041-103.21-23.734-21.294-85.533 84.04-17.272 127.23-179.82 0.113-358.4 0.214-535.42 0.305zm-855.34-32.172c-26.352-3.744-24.551-83.21-151-68.024-2.299-4.572-4.312-9.336-5.26-14.429 118.78-19.716 157.49 66.263 156.26 82.453zm1866.9-82.453c-0.949 5.094-2.962 9.856-5.26 14.429-126.45-15.186-124.64 64.278-151 68.024-1.237-16.19 37.474-102.17 156.26-82.453zm-2156.3-86.527c72.729 14.152 109.64 100.16 101.6 119.11-14.11-24.526-2.507-65.736-101.6-119.11zm2187.7 119.11c-8.047-18.943 28.867-104.95 101.6-119.11-99.09 53.369-87.486 94.579-101.6 119.11zm-2062.1 149.24c-18.417 0.322-45.055-5.798-53.617 34.876-45.16-48.241-21.834-144.27 54.045-160.38 49.837-9.06 44.191 21.685 67.905 37.365 10.235 8.411 24.498 9.145 34.59 17.604 8.885 5.522 7.394 22.415 20.234 21.063 5.497-9.737 5.568-20.992 5.473-31.819 1.233 0.333 3.696 1.02 4.929 1.35 7.94 33.087 54.629 66.13 80.058 67.099-0.617-9.429-10.259-14.501-12.226-23.457-5.685-21.893 0.26-45.041-7.061-66.72 11.658-1.515 23.291 1.28 34.83-0.189 8.538-34.262-51.834-69.045-54.423-80.036 25.854 8.879 62.518 46.024 71.98 93.967 5.522 29.379 5.33 59.707 13.671 88.564-17.825 1.142-245.6 0.736-260.39 0.712zm1777.8-0.709c8.341-28.859 8.149-59.185 13.671-88.564 9.461-47.943 46.125-85.088 71.979-93.967-2.59 10.989-62.962 45.772-54.423 80.036 11.539 1.469 23.172-1.326 34.83 0.189-7.321 21.679-1.374 44.827-7.061 66.72-1.967 8.955-11.609 14.028-12.226 23.457 25.431-0.969 72.118-34.012 80.058-67.099 1.231-0.333 3.696-1.02 4.929-1.35-0.095 10.828-0.024 22.082 5.473 31.82 12.84 1.35 11.349-15.543 20.234-21.063 10.092-8.458 24.357-9.193 34.59-17.604 23.714-15.68 18.07-46.425 67.905-37.365 75.879 16.109 99.202 112.14 54.042 160.38-8.563-40.674-35.201-34.554-53.617-34.876-14.786 0.02-242.56 0.426-260.38-0.713zm-1438.1-24.619c-35.35-10.14-66.911-39.449-71.885-77.05 10.711 13.576 21.062 27.839 35.304 38.004 22.185 18.312 72.165 23.87 90.13 75.202-16.21-14.145-32.037-30.421-53.549-36.156zm1305.2 36.156c17.965-51.332 67.945-56.892 90.13-75.202 14.239-10.164 24.593-24.428 35.304-38.004-4.975 37.601-36.535 66.909-71.885 77.05-21.516 5.735-37.343 22.011-53.549 36.156zm-625.85-13.21c-368.14-0.34-593.73-0.806-598.46-1.431-2.394-6.966-5.213-13.814-8.458-20.494 29.907-15.958 180.04-11.599 452.64-11.799 51.83 0 103.26-2e-3 154.28-4e-3 51.024 2e-3 102.45 4e-3 154.28 4e-3 272.59 0.199 422.73-4.159 452.64 11.799-3.246 6.68-6.066 13.528-8.458 20.494-4.728 0.625-230.32 1.091-598.46 1.431z"/>
</svg> 
    </div>*/}



 




               
                <div className='side-bar'> 

                <div className='decoration-top-container'>

                <div className='decoration-border top left'>
                <svg viewBox="0 0 287.5 287.5" xmlns="http://www.w3.org/2000/svg">
 <g transform="matrix(.035433 0 0 -.035433 9.5693 978.69)" fill="#996633" stroke="#000" stroke-width="17.639">
  <path d="m600 26900v-750h750v750h-750zm750 250h250v-1250h-1250v1250h1e3zm-750-1750v-2e3h1250v1250h-500v-750h-250v1e3h1e3v-1750h-750v-1500h750v-250h-1e3v1750h-500v-3e3h-250v5500h1500v1500h5500v-250h-3e3v-500h1750v-1e3h-250v750h-1500v-750h-1750v1e3h1500v500h-2e3v-1500h-1500zm3500 750h-1250v-500h1250v500zm-1250-1500v-750h750v750h-750zm750 250h250v-1250h-1250v1250h1e3z"/>
 </g>
</svg>
</div>



<div className='decoration-border top right'>
<svg viewBox="0 0 287.5 287.5" xmlns="http://www.w3.org/2000/svg">
 <g transform="matrix(.035433 0 0 -.035433 9.5693 978.69)" fill="#996633" stroke="#000" stroke-width="17.639">
  <path d="m600 26900v-750h750v750h-750zm750 250h250v-1250h-1250v1250h1e3zm-750-1750v-2e3h1250v1250h-500v-750h-250v1e3h1e3v-1750h-750v-1500h750v-250h-1e3v1750h-500v-3e3h-250v5500h1500v1500h5500v-250h-3e3v-500h1750v-1e3h-250v750h-1500v-750h-1750v1e3h1500v500h-2e3v-1500h-1500zm3500 750h-1250v-500h1250v500zm-1250-1500v-750h750v750h-750zm750 250h250v-1250h-1250v1250h1e3z"/>
 </g>
</svg>
</div>
                </div>
               
                    <CategoryButtons
                    clickOnCategory={props.clickOnCategory}
                    clickOnSubcategory={props.clickOnSubcategory}
                    currentCategory={props.currentCategory}
                    clickedCategories={props.clickedCategories}/>


                <div className='decoration-bottom-container'>
                <div className='decoration-border bottom right'>
                <svg viewBox="0 0 287.5 287.5" xmlns="http://www.w3.org/2000/svg">
 <g transform="matrix(.035433 0 0 -.035433 9.5693 978.69)" fill="#996633" stroke="#000" stroke-width="17.639">
  <path d="m600 26900v-750h750v750h-750zm750 250h250v-1250h-1250v1250h1e3zm-750-1750v-2e3h1250v1250h-500v-750h-250v1e3h1e3v-1750h-750v-1500h750v-250h-1e3v1750h-500v-3e3h-250v5500h1500v1500h5500v-250h-3e3v-500h1750v-1e3h-250v750h-1500v-750h-1750v1e3h1500v500h-2e3v-1500h-1500zm3500 750h-1250v-500h1250v500zm-1250-1500v-750h750v750h-750zm750 250h250v-1250h-1250v1250h1e3z"/>
 </g>
</svg>
</div>




<div className='decoration-border bottom left'>
<svg viewBox="0 0 287.5 287.5" xmlns="http://www.w3.org/2000/svg">
 <g transform="matrix(.035433 0 0 -.035433 9.5693 978.69)" fill="#996633" stroke="#000" stroke-width="17.639">
  <path d="m600 26900v-750h750v750h-750zm750 250h250v-1250h-1250v1250h1e3zm-750-1750v-2e3h1250v1250h-500v-750h-250v1e3h1e3v-1750h-750v-1500h750v-250h-1e3v1750h-500v-3e3h-250v5500h1500v1500h5500v-250h-3e3v-500h1750v-1e3h-250v750h-1500v-750h-1750v1e3h1500v500h-2e3v-1500h-1500zm3500 750h-1250v-500h1250v500zm-1250-1500v-750h750v750h-750zm750 250h250v-1250h-1250v1250h1e3z"/>
 </g>
</svg>
</div>
                </div>

                </div>


                

                {/* <div className='decoration-down'>
                <svg xmlns="http://www.w3.org/2000/svg" fill='#70380f' version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 2658 281.386" enableBackground="new 0 0 2658 281.386"> <g> <g> <path d="M1412.709,200.808c61.507,14.105,126.765,20.981,167.007-27.373c1.074,1.273,28.542,30.853,32.277,34.485 c30.587-40.423,92.939-47.71,143.84-47.71c0.148,1.028,3.067,14.552,3.195,15.145c46.867-15.712,105.042-19.062,153.494-19.062 c4.501,4.725,9.985,9.83,12.87,13.226c0,0,462.983-21.01,683.608-30.568c-0.001,0-683.607-30.645-683.608-30.645 c-3.547,4.174-7.395,7.516-12.87,13.225c-48.456,0-105.675-3.156-153.494-19.05c-0.52,2.388-2.917,13.216-3.195,15.145 c-49.191,0-112.445-6.219-143.84-47.71c-2.568,2.481-30.34,32.257-32.277,34.484c-39.584-47.564-109.623-42.892-168.927-26.74 c-43.92-56.438-121.664-61.489-171.911-1.919c-58.067-14.016-122.569-17.309-160.251,28.659 c-0.881-1.014-31.821-34.096-32.209-34.484c-37.583,41.699-87.801,47.71-143.829,47.71c-0.827-2.464-3.055-14.141-3.274-15.145 c-52.561,15.991-100.682,19.05-153.781,19.05c-6.333-6.333-8.208-8.077-12.583-13.225c0,0-683.949,30.645-683.951,30.645 c154.752,6.594,683.951,30.568,683.951,30.568c3.351-3.945,5.419-6.013,12.583-13.226c54.018,0,102.11,3.206,153.781,19.062 c0.216-1,2.297-12.234,3.274-15.145c56.516,0,106.272,6.04,143.829,47.71c0.771-0.776,31.229-33.323,32.209-34.485 c36.746,44.7,101.305,43.204,157.976,29.359C1283.847,263.764,1367.387,262.865,1412.709,200.808"/> </g> </g> </svg>
              
                </div> */}
            </div>
            
        </div>
        
        {/* <Logo class='small'/> */}
        </div>
    );
};

// const mapStateToProps = state => {
//     return {
//         categoriesAndSubcat: state.categoriesAndSubcat
//     };
// };

export default shopSideBar;
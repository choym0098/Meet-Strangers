export const getIncomingCallDialog = (callTypeInfo, acceptCallHandler, rejectCallHandler) => {
    console.log('getting incoming call dialog');
    const dialog = document.createElement('div');
    dialog.classList.add('dialog_wrapper');
    const dialogContent = document.createElement('div');
    dialogContent.classList.add('dialog_content');
    dialog.appendChild(dialogContent);

    const title = document.createElement('p');
    title.classList.add('dialog_title');
    title.innerHTML = `Incoming ${callTypeInfo} Call`;

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('dialog_image_container');
    const image = document.createElement('img');
    const avatarImagePath = './utils/images/dialogAvatar.png';
    image.src = avatarImagePath;
    imageContainer.appendChild(image);

    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('dialog_button_container');

    const acceptCallButton = document.createElement('button');
    acceptCallButton.classList.add('dialog_accept_call_button');
    const accpetCallImg = document.createElement('img');
    accpetCallImg.classList.add('dialog_button_image');
    const acceptCallImgPath = './utils/images/acceptCall.png'
    accpetCallImg.src = acceptCallImgPath;
    acceptCallButton.append(accpetCallImg)
    buttonContainer.appendChild(acceptCallButton);

    const rejectCallButton = document.createElement('button');
    rejectCallButton.classList.add('dialog_reject_call_button');
    const rejectCallImg = document.createElement('img');
    rejectCallImg.classList.add('dialog_button_image');
    const rejectCallImgPath = './utils/images/rejectCall.png';
    rejectCallButton.append(rejectCallImg);
    rejectCallImg.src = rejectCallImgPath;
    buttonContainer.appendChild(rejectCallButton);

    dialogContent.appendChild(title);
    dialogContent.appendChild(imageContainer);
    dialogContent.appendChild(buttonContainer);

    acceptCallButton.addEventListener('click', () => {
        acceptCallHandler();
    })

    rejectCallButton.addEventListener('click', () => {
        rejectCallHandler();
    })

    return dialog;
}

export const getCallingDialog = (rejectCallHandler) => {
    console.log('getting incoming call dialog');
    const dialog = document.createElement('div');
    dialog.classList.add('dialog_wrapper');
    const dialogContent = document.createElement('div');
    dialogContent.classList.add('dialog_content');
    dialog.appendChild(dialogContent);

    const title = document.createElement('p');
    title.classList.add('dialog_title');
    title.innerHTML = `Calling`;

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('dialog_image_container');
    const image = document.createElement('img');
    const avatarImagePath = './utils/images/dialogAvatar.png';
    image.src = avatarImagePath;
    imageContainer.appendChild(image);

    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('dialog_button_container');

    const hangUpCallButton = document.createElement('button');
    hangUpCallButton.classList.add('dialog_reject_call_button');
    const hangUpCallImg = document.createElement('img');
    hangUpCallImg.classList.add('dialog_button_image');
    const hangUpCallImgPath = './utils/images/rejectCall.png';
    hangUpCallButton.append(hangUpCallImg);
    hangUpCallImg.src = hangUpCallImgPath;
    buttonContainer.appendChild(hangUpCallButton);

    dialogContent.appendChild(title);
    dialogContent.appendChild(imageContainer);
    dialogContent.appendChild(buttonContainer);

    return dialog;
}

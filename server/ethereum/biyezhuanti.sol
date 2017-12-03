pragma solidity ^0.4.18;

contract jianfe {
    int8 public targetWeight = 0; //目標體重
    int8 public lastWeight = 0; //最後一次記錄體重
    uint256 public amount = 0; //累計總額
    address public initiator; //發起人
    uint256 public expiryDate = 0; //到期時間
    uint16 public supportersCount = 1; //支持者數
    uint16 public opponentsCount = 0; //反對者數
    uint256 public supportAmount = 0; //支持總數
    uint256 public opposeAmount = 0; //反對總數
    mapping (uint => address) public supporter; //支持者
    mapping (uint => address) public opponent; //反對者
    mapping (address => uint256) public supportProportion; //支持個人總數
    mapping (address => uint256) public opposeProportion; //反對個人總數
    event act(address _people,uint256 _expiryDate); //動作事件
    event settleEvent(uint256 _amount,uint256 _expiryDate,string _result); //結算事件

    modifier timeout() { //判斷是否超時 => 結算
        act(msg.sender,now);
        if(now <= expiryDate * 1 seconds) {
        _;
        }else {
            if(msg.value > 0) {
                msg.sender.transfer(msg.value);
            }
            settle();
        }
    }
    modifier toRaise() { //判斷是否為發起人=>否則累計總額
        if(msg.sender != initiator) {
            amount += msg.value;
            _;
        }
    }
    function jianfe(address _initiator,int8 _targetWeight ,int8 _lastWeight ,uint _expiryDate) payable public{
        initiator = _initiator;
        targetWeight = _targetWeight;
        lastWeight = _lastWeight;
        expiryDate = now + _expiryDate;

        amount = msg.value;
        supportAmount = msg.value;
        supporter[0] = initiator;
        supportProportion[initiator] = msg.value;

    }

    function support() timeout toRaise payable public{ //支持
        supportAmount += msg.value;
        if(supportProportion[msg.sender] > 0) {
            supportProportion[msg.sender] += msg.value;
        }else {
            supporter[supportersCount] = msg.sender;
            supportersCount += 1;
            supportProportion[msg.sender] = msg.value;
        }
    }

    function oppose() timeout toRaise payable public{ //反對
        opposeAmount += msg.value;
        if(opposeProportion[msg.sender] > 0) {
            opposeProportion[msg.sender] += msg.value;
        }else {
            opponent[opponentsCount] = msg.sender;
            opponentsCount += 1;
            opposeProportion[msg.sender] = msg.value;
        }
    }

    function recordWeight(int8 _lastWeight) timeout public { //記錄體重
        if(initiator == msg.sender) {
            lastWeight = _lastWeight;
            if (lastWeight <= targetWeight) {
                settle();
            }
        }
    }
    
    function settle() public{ //結算
        if(now >= expiryDate * 1 seconds || initiator == msg.sender) {
            if (lastWeight <= targetWeight || opposeAmount == 0) {
                settleEvent(amount,now, "support");
                for (uint256 supportIndex = 0; supportIndex < supportersCount; supportIndex++ ) {
                    supporter[ supportIndex ].transfer( amount * supportProportion[ supporter[ supportIndex ] ] / supportAmount );
                }
            }else {
                settleEvent(amount,now, "oppose");
                for (uint256 opposeIndex = 0; opposeIndex < opponentsCount; opposeIndex++ ) {
                    opponent[ opposeIndex ].transfer( amount * opposeProportion[ opponent[ opposeIndex ] ] / opposeAmount );
                }
            }
            selfdestruct(initiator);
        }
    }
}

contract zhuanti {
    mapping (address => address) public contractMap;
    event createContractEvent(address _jianfeAddress ,uint256 _margin ,uint _expiryDate);

    function createContract(int8 _targetWeight ,int8 _lastWeight ,uint _expiryDate) payable public{ //建立合約
        if( _targetWeight != 0 &&  msg.value != 0) {
            contractMap[msg.sender] = (new jianfe).value( msg.value )(msg.sender ,_targetWeight , _lastWeight , _expiryDate ) ;
            createContractEvent( contractMap[msg.sender] ,msg.value , _expiryDate);
        }
    }
}